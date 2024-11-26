import TeamResponseMapper from "./TeamResponseMapper";
import ObjectMapper from "./ObjectMapper";
import Modle from "@/app/models/Model";

export default class ObjectMapperFactory {
  static buildFactory(consumer: Modle): ObjectMapper {
    switch (consumer.getName()) {
      case "TeamsAPIResposneModel":
        return new TeamResponseMapper(consumer);
      default:
        console.log("Can't find mapper for class: ", consumer.getName());
        throw Error("No Mapper Exist for this Modle");
    }
  }
}
