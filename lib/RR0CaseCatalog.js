import { Fetcher } from "./Fetcher.js"

/**
 * @typedef {Record<string, any>} RR0CaseCatalogOptions
 * @property {string|URL} baseUrl
 * @property {string} filePath
 * @property {string} dirsFile
 */

/**
 * Case catalog
 */
export class RR0CaseCatalog extends Fetcher {
  /**
   * @readonly
   * @type {RR0CaseCatalogOptions}
   */
  static OPTIONS_DEFAULT = { baseUrl: new URL("https://rr0.org"), filePath: "/case.json", dirsFile: "casesDirs.json" }

  /**
   * @readonly
   * @type {string[]}
   */
  files

  /**
   * @readonly
   * @type {RR0CaseCatalogOptions}
   */
  options

  /**
   * @param {RR0CaseCatalogOptions} options
   * @param {string[]} files
   */
  constructor(options = {}, files) {
    super(options.baseUrl)
    this.options = Object.assign({ ...RR0CaseCatalog.OPTIONS_DEFAULT }, options)
    this.files = files
  }

  /**
   * Fetch a case JSON URL.
   *
   * @param {string} caseUrl The URL of the JSON file to fetch.
   * @param {string} [lang]
   * @return {Promise<RR0Case>}
   */
  async fetch(caseUrl, lang = navigator.language) {
    const fetchedCase = await this.fetchJson(new URL(caseUrl, this.baseUrl))
    fetchedCase.url = new URL(caseUrl.replace(this.options.filePath, "/index.html"), this.baseUrl)
    if (!lang.startsWith("fr") || !fetchedCase.title) {
      fetchedCase.title = this.titleFromUrl(caseUrl)
    }
    return fetchedCase
  }

  /**
   * @protected
   * @param {string} caseUrl
   * @return {string}
   */
  titleFromUrl(caseUrl) {
    let titleFromUrl = caseUrl.substring(0, caseUrl.length - this.options.filePath.length)
    titleFromUrl = titleFromUrl.substring(titleFromUrl.lastIndexOf("/") + 1)
    return titleFromUrl.replaceAll(/([a-z0-9])([A-Z0-9])/g, "$1 $2").trim()
  }
}
