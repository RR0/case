/**
 * @abstract
 */
export class Fetcher {
  /**
   * @protected
   * @type {string}
   */
  baseUrl

  /**
   * @param {string} baseUrl
   */
  constructor(baseUrl) {
    this.baseUrl = baseUrl
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
}
