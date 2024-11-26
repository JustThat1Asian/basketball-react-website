import Model from "@/app/models/Model";
import ObjectMapper from "./ObjectMapper";

export default class TeamResponseMapper extends ObjectMapper {
  map(data: Response): Model {
    console.log("new TeamsAPIResposneMapper Created");
    throw new Error("Method not implemented.");
  }
}
