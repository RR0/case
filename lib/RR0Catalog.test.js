import { beforeEach, describe, test } from "node:test"
import assert from "node:assert"
import { RR0Catalog } from "./RR0Catalog.js"

describe("RR0Catalog", () => {
  /**
   * @type {RR0Catalog}
   */
  let catalog

  beforeEach(async () => {
    catalog = new RR0Catalog()
  })

  test("fetchCase", async () => {
    const cases = await catalog.getCases()
    const casesFiles = cases.files
    const roswellCase = casesFiles.find(url => url.includes("/Roswell/"))
    const firstCase = await cases.fetch(roswellCase)
    assert.equal(firstCase.title, "Roswell")
  })

  test("fetchPeople", async () => {
    const mantellPeople = catalog.peopleFiles.find(url => url.includes("/MantellThomas/"))
    const firstPeople = await catalog.fetchPeople(mantellPeople)
    assert.equal(firstPeople.title, "Mantell, Thomas Francis")
  })
})
