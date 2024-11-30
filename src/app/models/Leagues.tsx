import League from "./League";
export default class Leagues {
  #leagues: Map<string, League> = new Map();

  getLeague() {
    return this.#leagues;
  }
  delLeague(league: string) {
    this.#leagues.delete(league);
    return this;
  }
  addLeague(league: League) {
    this.#leagues.set(league.getConfName(), league);
    return this;
  }
}
