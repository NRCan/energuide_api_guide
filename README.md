[La version française suit.](#---------------------------------------------------------------------)

# Proof of Concept for the NRCAN API

[![CircleCI](https://circleci.com/gh/cds-snc/nrcan_poc/tree/master.svg?style=svg)](https://circleci.com/gh/cds-snc/nrcan_poc/tree/master)

## Reason for existing

This application returns housing energy efficiency data collected by NRCAN. Specifically, does the following:
- given a file ID, it will return details for that evaluation
- given a location and a a type of furnace energy source, it will return a list of matching evaluations

It is the first consumer of the [NRCAN API](https://github.com/cds-snc/nrcan_api/); as such, it serves two purposes:
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

## ---------------------------------------------------------------------


# Preuve de faisabilité pour l'API de RNCan 

[![CircleCI](https://circleci.com/gh/cds-snc/nrcan_poc/tree/master.svg?style=svg)](https://circleci.com/gh/cds-snc/nrcan_poc/tree/master)

## Raison d'être

Cette application retourne les données sur l’efficacité de l’énergie sur le logement recueilli par RNCan. Plus précisément, cette application fait ce qui suit :
- Selon l’identificateur du fichier, elle retournera les détails pour cette évaluation
- Selon le lieu et le type de la source d’énergie de la fournaise, elle retournera une liste d’évaluations correspondantes.

Cette application est la première consommatrice de l'[API RNCAN](https://github.com/cds-snc/nrcan_api#lapi-de-l%C3%89nerguide-de-rncan); dans ce contexte, elle permet d’atteindre deux objectifs :
1. C’est une interface au-dessus de l’API permettant à ceux qui ne sont pas des concepteurs d’interroger les données de RNCan 
2. Elle fournit un exemple de mise en œuvre pour les services futurs qui seront reliés à l’API


## Démarrage

#### Préalables 

Vous aurez besoin d’installer npm, et préférablement yarn aussi.

#### Décollage :rocket:

1. Cloner le projet
2. Installez les dépendances avec yarn
3. Exécuter localement l’application avec yarn dev
4. [http://localhost:3003/](http://localhost:3003/)

Excellent! Offrez-vous des Timbits pour vous féliciter (ou une alternative adéquate sans gluten).

## Tests

Effectuez des tests avec :

```bash
yarn test
yarn lint
```
