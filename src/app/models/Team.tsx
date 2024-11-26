import Leagues from "./Leagues";
export default class Team {
  #city: string = "";
  #fullName: string = "";
  #teamId: number = -1;
  #nickName: string = "";
  #logo: string = "";
  #shortName: string = "";
  #allStar: number = -1;
  #nbaFranchise: number = -1;
  #leagues: Leagues | null = null;

  constructor() {}
  getCity() {
    return this.#city;
  }
  getFullName() {
    return this.#fullName;
  }
  getTeamId() {
    return this.#teamId;
  }
  getNickName() {
    return this.#nickName;
  }
  getLogo() {
    return this.#logo;
  }
  getShortName() {
    return this.#shortName;
  }
  getAllStar() {
    return this.#allStar;
  }
  isNbaFranchise() {
    return this.#nbaFranchise === 1;
  }
  isAllStar() {
    return this.#allStar === 1;
  }
  getLeagues() {
    return this.#leagues;
  }
  setCity(city: string) {
    this.#city = city;
  }
  setFullName(fullName: string) {
    this.#fullName = fullName;
  }
  setTeamId(teamId: number) {
    this.#teamId = teamId;
  }
  setNickName(nickName: string) {
    this.#nickName = nickName;
  }
  setLogo(logo: string) {
    this.#logo = logo;
  }
  setShortName(shortName: string) {
    this.#shortName = shortName;
  }
  setAllStart(allStar: number) {
    this.#allStar = allStar;
  }
  setNbaFranchise(nbaFranchise: number) {
    this.#nbaFranchise = nbaFranchise;
  }
  setLeagues(leagues: Leagues | null) {
    this.#leagues = leagues;
  }
}
