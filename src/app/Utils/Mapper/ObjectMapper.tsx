import Model from "@/app/models/Model";

export default abstract class ObjectMapper {
  #consumer: Model;
  constructor(consumer: Model) {
    this.#consumer = consumer;
  }
  abstract map(data: Response): Model;
}
