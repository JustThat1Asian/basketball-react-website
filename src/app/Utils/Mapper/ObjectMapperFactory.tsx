import TeamResponseMapper from "./TeamResponseMapper";
import ObjectMapper from "./ObjectMapper";
import Modle from "@/app/models/Model";

export default class ObjectMapperFactory {
  static buildFactory(apiGet: string): ObjectMapper {
    switch (apiGet) {
      case "teams/":
        return new TeamResponseMapper();
      default:
        throw Error("No Mapper Exist for this Modle");
    }
  }
}
