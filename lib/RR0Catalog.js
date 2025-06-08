/** @import { RR0CatalogOptions } from "./RR0CatalogOptions.js" */

import { Fetcher } from "./Fetcher.js"
import { RR0CaseCatalog } from "./RR0CaseCatalog.js"

export class RR0Catalog extends Fetcher {
  /**
   * @protected
   * @type {RR0CaseCatalog|undefined}
   */
  cases

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
  constructor(options = {
    cases: RR0CaseCatalog.OPTIONS_DEFAULT,
    peopleDirsFile: "peopleDirs.json"
  }) {
    super(options.cases.baseUrl)
    this.options = options
  }

  /**
   *
   * @return {Promise<RR0CaseCatalog>}
   */
  async getCases() {
    if (!this.cases) {
      const options = this.options.cases
      const baseUrl = options.baseUrl
      const caseFiles = /** @type {string[]} */ await this.fetchArray(new URL(options.dirsFile, baseUrl), options.filePath)
      this.cases = new RR0CaseCatalog(options, caseFiles)
    }
    return this.cases
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
