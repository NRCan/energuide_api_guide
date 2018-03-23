# Proof of Concept for the NRCAN API

[![CircleCI](https://circleci.com/gh/cds-snc/nrcan_poc/tree/master.svg?style=svg)](https://circleci.com/gh/cds-snc/nrcan_poc/tree/master)

This application returns housing energy efficiency data collected by NRCAN. Specifically, does the following:
- given a file ID, it will return details for that evaluation
- given a location and a a type of furnace energy source, it will return a list of matching evaluations

It is the first consumer of the groundbreaking [NRCAN API](https://github.com/cds-snc/nrcan_api/); as such, it serves two purposes:
1. it is an interface on top of the API allowing non-developers to query NRCAN data
2. it provides an implementation example for future services that will connect to the API


## Startup

#### Prerequisites

You're going to need `npm` installed globally, and preferably `yarn` as well.

#### Liftoff :rocket:

1. Clone repo
2. Install dependencies with `yarn`
3. Run the app locally with `yarn dev`
4. [http://localhost:3003/](http://localhost:3003/)

Nice! You're now at the bleeding edge of Canadian Government tech. Treat yourself to a congratulatory Timbit (or a suitable gluten-free alternative).


## Tests

Run the tests with:

```bash
yarn test
yarn lint
```
