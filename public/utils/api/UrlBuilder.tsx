class UrlBuilder {
  #url: string;
  #queryParams: Record<string, string | number> = {};
  static #urlBuilder: UrlBuilder;
  private constructor() {}

  public static getUrlBuilder(): UrlBuilder {
    if (!UrlBuilder.#urlBuilder) {
      UrlBuilder.#urlBuilder = new UrlBuilder();
    }
    return UrlBuilder.#urlBuilder;
  }

  setUrl(urL: string) {
    this.#url = urL;
    return this;
  }

  resetUrlBuilder() {
    this.#url = "";
    this.#queryParams = {};
    return this;
  }

  addParams(queryParams: Record<string, string | number>) {
    Object.entries(queryParams || {}).forEach(([key, value]) => {
      this.#queryParams[key] = value;
    });
    return this;
  }

  addParam(key: string, value: number | string) {
    this.#queryParams[key] = value;
    return this;
  }

  delParam(key: string) {
    delete this.#queryParams[key];
    return this;
  }

  listParams() {
    console.log("Current Parameters: ");
    Object.entries(this.#queryParams).forEach(([key, value]) => {
      console.log(key, value);
    });
  }

  #paramsToString(): string {
    return Object.entries(this.#queryParams)
      .map(([key, value]) => `${key}=${String(value)}`)
      .join("&");
  }

  build(): string {
    return Object.entries(this.#paramsToString()).length === 0
      ? `${this.#url}`
      : `${this.#url}?${this.#paramsToString()}`;
  }
}

export default UrlBuilder;
