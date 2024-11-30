import TeamResponseMapper from "./TeamResponseMapper";
import ObjectMapper from "./ObjectMapper";
import Modle from "@/app/models/Model";

export default class ObjectMapperFactory {
  static buildFactory(apiGet: string): ObjectMapper {
    switch (apiGet) {
      case "TeamsAPIResponseModel":
        return new TeamResponseMapper();
      default:
        throw new MapperNotFoundError("No Mapper Exist for this Modle");
    }
  }
}
