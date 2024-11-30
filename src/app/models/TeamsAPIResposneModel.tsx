import { stat } from "fs";
import Team from "./Team";
import Model from "./Model";

export default class TeamsAPIResponseModel extends Model {
  #status: number = -1;
  #message: string = "";
  #results: number = -1;
  #filters: string[] = [];
  #teams: Team[] = [];
  constructor() {
    super("TeamsAPIResponseModel");
  }

  getStatus() {
    return this.#status;
  }
  getMessage() {
    return this.#message;
  }
  getResults() {
    return this.#results;
  }
  getFilters() {
    return this.#filters;
  }
  getTeams() {
    return this.#teams;
  }
  setStatus(status: number) {
    this.#status = status;
    return this;
  }
  setMessage(message: string) {
    this.#message = message;
    return this;
  }
  setResults(results: number) {
    this.#results = results;
    return this;
  }
  setFilters(filters: string[]) {
    this.#filters = filters;
    return this;
  }
  setTeam(team: Team[]) {
    this.#teams = team;
    return this;
  }
}
