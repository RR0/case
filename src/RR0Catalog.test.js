import { beforeEach, describe, test } from "node:test"
import assert from "node:assert"
import { RR0Catalog } from "./RR0Catalog.js"

describe("RR0Catalog", () => {

  let catalog

  beforeEach(async () => {
    catalog = new RR0Catalog("https://rr0.org")
    await catalog.init("casesDirs.json", "peopleDirs.json")
  })

  test("init", async () => {
    assert.ok(catalog.casesFiles.length > 0)
  })

  test("fetchCase", async () => {
    const roswellCase = catalog.casesFiles.find(url => url.includes("/Roswell/"))
    const firstCase = await catalog.fetchCase(roswellCase)
    assert.equal(firstCase.title, "Roswell")
  })

  test("fetchPeople", async () => {
    const mantellPeople = catalog.peopleFiles.find(url => url.includes("/MantellThomas/"))
    const firstPeople = await catalog.fetchPeople(mantellPeople)
    assert.equal(firstPeople.title, "Mantell, Thomas Francis")
  })
})
