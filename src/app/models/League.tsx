export default class League {
  #confName: string = "";
  #conference:string="";
  #divName: string = "";

  constructor() {}

  getConfName() {
    return this.#confName;
  }
  getDivName() {
    return this.#divName;
  }
  getConference(){
    return this.#conference;
  }
  setConference(conference:string){
    this.#conference = conference;
    return this;
  }
  setConfName(confName: string) {
    this.#confName = confName;
    return this;
  }
  setDivName(divName: string) {
    this.#divName = divName;
    return this;
  }
}
