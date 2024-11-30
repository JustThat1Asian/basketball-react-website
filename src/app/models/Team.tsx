import Leagues from "./Leagues";
export default class Team {
  #city: string = "";
  #fullName: string = "";
  #teamId: number = -1;
  #nickName: string = "";
  #logo: string = "";
  #code: string = "";
  #allStar: boolean = false;
  #nbaFranchise: boolean = false;
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
  getcode() {
    return this.#code;
  }
  getAllStar() {
    return this.#allStar;
  }
  isNbaFranchise() {
    return this.#nbaFranchise;
  }
  isAllStar() {
    return this.#allStar;
  }
  getLeagues() {
    return this.#leagues;
  }
  setCity(city: string) {
    this.#city = city;
    return this;
  }
  setFullName(fullName: string) {
    this.#fullName = fullName;
    return this;
  }
  setTeamId(teamId: number) {
    this.#teamId = teamId;
    return this;
  }
  setNickName(nickName: string) {
    this.#nickName = nickName;
    return this;
  }
  setLogo(logo: string) {
    this.#logo = logo;
    return this;
  }
  setCode(code: string) {
    this.#code = code;
    return this;
  }
  setAllStar(allStar: boolean) {
    this.#allStar = allStar;
    return this;
  }
  setNbaFranchise(nbaFranchise: boolean) {
    this.#nbaFranchise = nbaFranchise;
    return this;
  }
  setLeagues(leagues: Leagues | null) {
    this.#leagues = leagues;
    return this;
  }
}
