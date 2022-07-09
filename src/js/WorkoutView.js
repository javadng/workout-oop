import { locale } from "../config/globalConfig.js";

export default class Workout {
  //
  date = new Date();
  id = (Date.now() + "").slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription() {
    const optionsDate = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    //prettier-ignore
    const formatedDate = new Intl.DateTimeFormat(locale, optionsDate).format(this.date);

    this.description = `${
      this.type === "running" ? "دویدن" : "دوچرخه سواری"
    } در ${formatedDate}`;
  }
}
