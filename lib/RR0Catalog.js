export class RR0CatalogOptions {
  /**
   * @readonly
   * @member {URL}
   */
  baseUrl

  /**
   * @readonly
   * @member {string}
   */
  casesDirsFile

  /**
   * @readonly
   * @member {string}
   */
  peopleDirsFile
}

export class RR0Catalog {
  /**
   * @protected
   * @member {string[]| undefined}
   */
  casesFiles

  /**
   * @protected
   * @member {string[] | undefined}
   */
  peopleFiles

  /**
   * @protected
   * @type {RR0CatalogOptions}
   */
  options

  /**
   *
   * @param {RR0CatalogOptions} [options] The URL to fetch the case and people directories from.
   */
  constructor(options = {baseUrl: new URL("https://rr0.org"), casesDirsFile: "casesDirs.json", peopleDirsFile: "peopleDirs.json"}) {
    this.options = options
  }

  /**
   *
   * @param {string} [casesDirsFile]
   */
  async getCases(casesDirsFile = this.options.casesDirsFile) {
    if (!this.casesFiles) {
      this.casesFiles = /** @type {string[]} */ await this.fetchArray(new URL(casesDirsFile, this.options.baseUrl), "/case.json")
    }
    return this.casesFiles
  }

  /**
   *
   * @param {string} [peopleDirsFile]
   */
  async getPeople(peopleDirsFile = this.options.peopleDirsFile) {
    if (!this.peopleFiles) {
      this.peopleFiles = /** @type {string[]} */ await this.fetchArray(new URL(peopleDirsFile, this.options.baseUrl), "/people.json")
    }
    return this.peopleFiles
  }

  /**
   * @protected
   * @param {URL} url
   * @param {string} suffix
   * @template T
   * @return {Promise<T[]>}
   */
  async fetchArray(url, suffix) {
    const casesJson = await this.fetchJson(url)
    return casesJson.map(dir => dir + suffix)
  }

  /**
   * @protected
   * @param {URL} url
   * @template T
   * @return {Promise<T>}
   */
  async fetchJson(url) {
    const casesResponse = await fetch(url, { headers: { "accept": "application/json" } })
    return await casesResponse.json()
  }

  /**
   * Fetch a case JSON URL.
   *
   * @param {string} caseUrl The URL of the JSON file to fetch.
   * @return {Promise<RR0Case>}
   */
  async fetchCase(caseUrl) {
    const pickedCase = await this.fetchJson(new URL(caseUrl, this.baseUrl))
    const caseFile = "/case.json"
    pickedCase.url = new URL(caseUrl.replace(caseFile, "/index.html"), this.baseUrl)
    if (!navigator.language.startsWith("fr") || !pickedCase.title) {
      let titleFromUrl = caseUrl.substring(0, caseUrl.length - caseFile.length)
      titleFromUrl = titleFromUrl.substring(titleFromUrl.lastIndexOf("/") + 1)
      pickedCase.title = titleFromUrl.replaceAll(/([a-z0-9])([A-Z0-9])/g, "$1 $2").trim()
    }
    return pickedCase
  }

  /**
   * Fetch a people JSON URL.
   *
   * @param {string} peopleUrl The URL of the JSON file to fetch.
   * @return {Promise<T>}
   */
  async fetchPeople(peopleUrl) {
    const pickedPeople = await this.fetchJson(new URL(peopleUrl, this.baseUrl))
    const peopleFile = "/people.json"
    pickedPeople.url = new URL(peopleUrl.replace(peopleFile, "/index.html"), this.baseUrl)
    if (!pickedPeople.title) {
      let titleFromUrl = peopleUrl.substring(0, peopleUrl.length - peopleFile.length)
      titleFromUrl = titleFromUrl.substring(titleFromUrl.lastIndexOf("/") + 1)
      pickedPeople.title = titleFromUrl.replaceAll(/([a-z0-9])([A-Z0-9])/g, "$1 $2").trim()
    }
    return pickedPeople
  }
}
