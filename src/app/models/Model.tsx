export default abstract class Model {
  #name!: string;
  constructor(name: string) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}
