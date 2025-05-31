export class RR0Catalog {
  /**
   * @readonly
   * @member {string[]}
   */
  casesFiles = []

  /**
   * @readonly
   * @member {string[]}
   */
  peopleFiles = []

  /**
   * @readonly
   * @member {URL}
   */
  baseUrl = new URL("https://rr0.org")

  /**
   *
   * @param {URL} [baseUrl] The URL to fetch the case and people directories from.
   */
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  /**
   * Fetch the case and people directories.
   *
   * @param {string} [casesDirsFile] The name of the cases directories JSON file to fetch.
   * @param {string} [peopleDirsFile] The name of the people directories JSON file to fetch.
   */
  async init(casesDirsFile = "casesDirs.json", peopleDirsFile = "peopleDirs.json") {
    this.casesFiles = /** @type {string[]} */ await this.fetchArray(new URL(casesDirsFile, this.baseUrl), "/case.json")
    this.peopleFiles = /** @type {string[]} */ await this.fetchArray(new URL(peopleDirsFile, this.baseUrl), "/people.json")
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
