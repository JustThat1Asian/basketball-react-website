import Model from "@/app/models/Model";
import ObjectMapper from "./ObjectMapper";
import TeamsAPIResponseModel from "@/app/models/TeamsAPIResposneModel";
import Team from "@/app/models/Team";
import Leagues from "@/app/models/Leagues";
import League from "@/app/models/League";

export default class TeamResponseMapper extends ObjectMapper {
  #returnObject:TeamsAPIResponseModel = new TeamsAPIResponseModel();

  map(data: any): TeamsAPIResponseModel {
    Object.entries(data).forEach(([key, value]) => {
      this.#mapHelper(key, value);
    });
    return this.#returnObject;
  }

  #mapHelper(keyString: string, values:any){
    switch(keyString){
      case "response":
        this.#populateTeams(values);
        return;
      default:
        return;
    }
  }
  #populateTeams(teamsListResponse:any) {
    teamsListResponse.map((team:any)=>{
      this.#returnObject.addTeam(this.#createTeamFromResponse(team));
    })
  }

  #createTeamFromResponse(team:any):Team {
    let retunTeam:Team = new Team();
    return retunTeam
    .setAllStar(team.allStar)
    .setCity(team.city)
    .setFullName(team.name)
    .setTeamId(team.id)
    .setLogo(team.logo)
    .setNbaFranchise(team.nbaFranchise)
    .setNickName(team.nickname)
    .setCode(team.code)
    .setLeagues(this.#createLeaugesFromResponse(team.leagues))
  }

  #createLeaugesFromResponse(leauges:any):Leagues{
    let leagues = new Leagues();
    Object.entries(leauges).forEach(([leaugeName, leaugeInfo]) => {
      leagues.addLeague(this.#createLeaugeFromResponse(leaugeName, leaugeInfo))
    })
    return leagues;

  }

  #createLeaugeFromResponse(leagueName:string, leagueInfo:any):League{
    return new League()
    .setConfName(leagueName)
    .setConference(leagueInfo.conference)
    .setDivName(leagueInfo.division)
  }
}
