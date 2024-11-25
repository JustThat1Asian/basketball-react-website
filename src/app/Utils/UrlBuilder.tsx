class UrlBuilder {
  #url: string;
  #queryParams: Record<string, string | number> = {};
  constructor(baseApi: string) {
    this.#url = baseApi;
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
    return this;
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
