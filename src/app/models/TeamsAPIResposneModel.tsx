import { stat } from "fs";
import Team from "./Team";
import Model from "./Model";

export default class TeamsAPIResponseModel extends Model {
  #teams: Team[] = [];
  getTeams() {
    return this.#teams;
  }
  setTeam(team: Team[]) {
    this.#teams = team;
    return this;
  }

  addTeam(team:Team){
    this.#teams.push(team);
  }
}
