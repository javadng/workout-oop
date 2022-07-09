import Running from "./RunningView.js";
import Cycling from "./CyclingView.js";
import UIView from "./UIView.js";
import StorageView from "./StorageView.js";
import Markup from "./Markup.js";

const modalContent = document.querySelector(".modal__content p");

//form selection
const workouContainer = document.querySelector(".workouts__container");
const form = document.querySelector(".form");
const distanceInput = document.querySelector(".distance__input");
const durationInput = document.querySelector(".duration__input");
const cadenceInput = document.querySelector(".cadence__input");
const elevationInput = document.querySelector(".elevation__input");
const typeInput = document.querySelector("#type_workout");

export default class App extends UIView {
  //define variables
  #map;
  #mapEvent;
  #mapMarkerArray = [];
  #workouts = [];
  #mapZoomLevel = 13;

  constructor() {
    super();
    this._getPosition();
    this._getLocalStorage();
    // set value of select input of type
    typeInput.value = "running";

    form.addEventListener("submit", this._newWorkout.bind(this));
    //prettier-ignore
    workouContainer.addEventListener("click", this._moveToPopup.bind(this));
    //prettier-ignore
    workouContainer.addEventListener("click",this._workoutElemEventhandler.bind(this));
    // select chande & toggle inputs
    typeInput.addEventListener("change", this._toggleElevationField);
  }

  _newWorkout(e) {
    //prettier-ignore
    const validInputs = (...inputs) => inputs.every((inp) => Number.isFinite(inp));
    const isAllPositive = (...inputs) => inputs.every((inp) => inp > 0);

    e.preventDefault();

    // Get data of form
    const type = typeInput.value;
    const distance = +distanceInput.value;
    const duration = +durationInput.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    let elevation;
    let cadence;

    if (type === "running") {
      cadence = +cadenceInput.value;

      //gard
      // prettier-ignore
      if ( !validInputs(distance, duration, cadence) || !isAllPositive(distance, duration, cadence))
        return this._modalHandler(modalElem);

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    if (type === "cycling") {
      elevation = +elevationInput.value;

      // Gard
      // prettier-ignore
      if ( !validInputs(distance, duration, elevation) || !isAllPositive(distance, duration)) 
      return this._modalHandler(modalElem);

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    //if flag is true => means the workout edited
    let flag = false;

    this.#workouts.some((work, index) => {
      if (work.coords.includes(workout.coords[0])) {
        workout = work;
        this.#workouts.splice(index, 1);
        this.#map.removeLayer(this.#mapMarkerArray[index]);
        this.#mapMarkerArray.splice(index, 1);

        flag = true;
        return;
      }
    });

    if (flag) {
      // prettier-ignore
      if (type === "running") workout = new Running([lat, lng], distance, duration, cadence);
      // prettier-ignore
      if (type === "cycling") workout = new Cycling([lat, lng], distance, duration, elevation);
    }
    // console.log(workout.type);

    // push to array
    this.#workouts.push(workout);

    // render markout

    this._renderworkoutMarker(workout);

    //render workout on the list
    this._renderWorkout(workout, flag);

    //hide form
    this._hideForm();
    this._toggleMenuHandler();

    // set localStorage
    // this._setLocalStorag();
    StorageView._setLocalStorag(this.#workouts);
  }

  _workoutElemEventhandler(e) {
    //Gard
    if (!this.#map) return;
    //remove
    if (e.target.className === "fa fa-trash") {
      const deleteItem = e.target.closest(".workout");
      // const form = workouContainer.firstElementChild;

      //prettier-ignore
      const deleteIndex = this.#workouts.findIndex(workout => workout.id === deleteItem.dataset.id);

      this.#workouts.splice(deleteIndex, 1);

      // renders remain workout
      this.append(workouContainer, this.#workouts);

      // update localstorage
      StorageView._setLocalStorag(this.#workouts);

      //delete marker
      this.#map.removeLayer(this.#mapMarkerArray[deleteIndex]);
      this.#mapMarkerArray.splice(deleteIndex, 1);
    }

    //change
    if (e.target.className === "fa fa-edit") {
      form.classList.remove("hidden");

      const index = e.target.closest(".workout");

      //prettier-ignore
      const itemEditIndex = this.#workouts.findIndex(workout => workout.id === index.dataset.id);
      // const itemEditIndex = this.#workouts.find(editWork => editWork.id === deleteItem.dataset.id);

      this.#mapEvent = this.#mapMarkerArray[itemEditIndex];
      this.#mapEvent.latlng = this.#mapEvent._latlng;
    }
  }

  _getPosition() {
    if (navigator.geolocation) {
      //prettier-ignore
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), geoError.bind(this));
    }
    //Error handler
    function geoError() {
      modalContent.textContent = `دسترسی به موقعیت مکانی ممکن نیست!`;
      this._modalHandler(modalElem);
    }
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];

    this.#map = L.map("map").setView(coords, this.#mapZoomLevel);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // handling mark on map
    this.#map.on("click", this._showForm.bind(this));

    // render markers
    this.#workouts.forEach((work) => this._renderworkoutMarker(work));
  }

  _renderworkoutMarker(workout) {
    const options = {
      maxWidth: 250,
      minWidth: 100,
      autoClose: false,
      closeOnClick: false,
      className: `${workout.type}-popup`,
    };

    let newMarker = L.marker(workout.coords, { draggable: true })
      .addTo(this.#map)
      .bindPopup(L.popup(options))
      .setPopupContent(`${workout.description}`)
      .openPopup();

    newMarker.on("dragend", this._newCoordsMarker.bind(this, workout));
    this.#mapMarkerArray.push(newMarker);
  }

  _newCoordsMarker(workout, e) {
    const { lat: newLat, lng: newLng } = e.target._latlng;
    const newCoords = [newLat, newLng];

    //set new coords
    this.#workouts.forEach((newWorkMark) => {
      if (workout.id === newWorkMark.id) {
        newWorkMark.coords = newCoords;
      }
    });

    StorageView._setLocalStorag(this.#workouts);
  }

  _renderWorkout(workout, flag = false) {
    // if the workout is edited replace the new to
    if (flag) {
      this.append(workouContainer, this.#workouts);
    } else {
      Markup._generateMarkup(workout, form);
    }
  }

  append(ItemContainer, workoutArray) {
    const form = workouContainer.firstElementChild;
    ItemContainer.innerHTML = "";
    ItemContainer.appendChild(form);

    workoutArray.forEach((work) => Markup._generateMarkup(work, form));
  }

  _moveToPopup(e) {
    //Gard
    if (!this.#map) return;

    const workouElem = e.target.closest(".workout");

    if (!workouElem) return;

    const workoutClicked = this.#workouts.find(
      (work) => work.id === workouElem.dataset.id
    );

    if (!workoutClicked) return;

    const setViewOptions = {
      animate: true,
      pan: { duration: 1 },
    };

    //prettier-ignore
    this.#map.setView(workoutClicked.coords, this.#mapZoomLevel, setViewOptions);
  }

  _getLocalStorage() {
    this.#workouts = StorageView._getLocalStorage();
    this.#workouts.forEach((work) => this._renderWorkout(work));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove("hidden");
    durationInput.focus();
    this._toggleMenuHandler();
    // this._toggleMenuHandler;
  }

  _hideForm() {
    //prettier-ignore
    distanceInput.value = durationInput.value = elevationInput.value = cadenceInput.value = '';
    form.classList.add("hidden");
  }

  _toggleElevationField() {
    elevationInput.closest(".form__row").classList.toggle("form__row_hidden");
    cadenceInput.closest(".form__row").classList.toggle("form__row_hidden");
  }
}

const app = new App();
