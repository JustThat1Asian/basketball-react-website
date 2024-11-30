import Model from "@/app/models/Model";
import ObjectMapper from "./ObjectMapper";
import TeamsAPIResponseModel from "@/app/models/TeamsAPIResposneModel";

export default class TeamResponseMapper extends ObjectMapper {
  returnObject:TeamsAPIResponseModel = new TeamsAPIResponseModel();

  map(data: Response): Model {
    console.log("new TeamsAPIResposneMapper Created");
    throw new Error("Method not implemented.");
  }

  #mapHelper(keyString: string, data:Response){
    switch(keyString){
      case "get":
        return;
    }
  }
}
