export default class League {
  #confName: string = "";
  #divName: string = "";

  constructor() {}

  getConfName() {
    return this.#confName;
  }
  get divName() {
    return this.#divName;
  }
  setConfName(confName: string) {
    this.#confName = confName;
  }
  setDivName(divName: string) {
    this.#divName = divName;
  }
}
