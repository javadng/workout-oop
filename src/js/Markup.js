class Markup {
  _generateMarkup(workout, container) {
    let html = `
    <li class="workout workout__${workout.type}" data-id="${workout.id}">
      <a href="#" class="workout__del"><i class="fa fa-trash"></i></a>
      <a href="#" class="workout__change"><i class="fa fa-edit"></i></a>
      <h2 class="workout__title">${workout.description}</h2>
      <div class="workout__detail">
        <span class="workou_unit">km</span>
        <span class="workou_value">${workout.distance}</span>
        <span class="workou_icon">${
          workout.type === "running" ? "🏃‍♂️" : "🚲"
        }</span>
      </div>
      <div class="workout__detail">
        <span class="workou_unit">MIN</span>
        <span class="workou_value">${workout.duration}</span>
        <span class="workou_icon">⌚</span>
      </div>
    `;

    if (workout.type === "running") {
      html += `
          <div class="workout__detail">
          <span class="workou_unit">MIN/KM</span>
          <span class="workou_value">${workout.pace.toFixed(1)} </span>
          <span class="workou_icon">⚡</span>
        </div>
        <div class="workout__detail">
          <span class="workou_unit">SPM</span>
          <span class="workou_value">${workout.cadence} </span>
          <span class="workou_icon">👣</span>
        </div>
      </li>
      `;
    }

    if (workout.type === "cycling") {
      html += `
          <div class="workout__detail">
          <span class="workou_unit">KM/H</span>
          <span class="workou_value">${workout.speed.toFixed(1)}</span>
          <span class="workou_icon">⚡</span>
        </div>
        <div class="workout__detail">
          <span class="workou_unit">M</span>
          <span class="workou_value">${workout.elevationGain}</span>
          <span class="workou_icon">🗻</span>
        </div>
      </li>
      `;
    }

    container.insertAdjacentHTML("afterend", html);
  }
}

export default new Markup();
