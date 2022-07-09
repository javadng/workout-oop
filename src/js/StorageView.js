import Cycling from "./CyclingView.js";
import Running from "./RunningView.js";

class StorageView {
  _setLocalStorag(workoutArr) {
    localStorage.setItem("workouts", JSON.stringify(workoutArr));
  }

  _getLocalStorage() {
    const allData = JSON.parse(localStorage.getItem("workouts"));

    if (!allData) return;

    allData.forEach((data) => {
      if (data.type === "running") Object.setPrototypeOf(data, Running);
      if (data.type === "cycling") Object.setPrototypeOf(data, Cycling);
    });

    return allData;
  }
}

export default new StorageView();
