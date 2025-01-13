import TeamResponseMapper from "./TeamResponseMapper";
import ObjectMapper from "./ObjectMapper";

export default class ObjectMapperFactory {
  static buildFactory(apiGet: string): ObjectMapper {
    switch (apiGet) {
      case "TeamsModel":
        return new TeamResponseMapper();
      default:
        throw new MapperNotFoundError("No Mapper Exist for this Modle");
    }
  }
}
