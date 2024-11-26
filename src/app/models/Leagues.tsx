import League from "./League";
export default class Leagues {
  #standard: League | null;
  #vegas: League | null;
  #utah: League | null;

  constructor() {
    this.#standard = null;
    this.#vegas = null;
    this.#utah = null;
  }

  getStandard() {
    return this.#standard;
  }
  getVegas() {
    return this.#vegas;
  }
  getUtah() {
    return this.#utah;
  }
  setStandard(standard: League) {
    this.#standard = standard;
  }
  setVegas(vegas: League) {
    this.#vegas = vegas;
  }
  setUtah(utah: League) {
    this.#utah = utah;
  }
}
