# RR0 Case API

This API allows to fetch case records from a RR0 server.

## Setup

```shell
npm install
```

## Usage

```js
import { RR0Catalog } from "@rr0/case"

const catalog = new RR0Catalog()
await catalog.init()

/** @type RR0Case */
const roswellCase = catalog.casesFiles.find(url => url.includes("/Roswell/"))
const firstCase = await catalog.fetchCase(roswellCase)
assert.equal(firstCase.title, "Roswell")

const mantellPeople = catalog.peopleFiles.find(url => url.includes("/MantellThomas/"))
const firstPeople = await catalog.fetchPeople(mantellPeople)
assert.equal(firstPeople.title, "Mantell, Thomas Francis")
```

## Build

```shell
npm run build
```

## Test

```shell
npm run test
```

## Deployment

Increase the version number in [`package.json`](package.json), then:

```shell
npm publish
```

will build & test then publish a new version of the package.
