# Superhero

This is an app which showcases communicating with a third party API using
Ember. It uses the Marvel API to list or search the Marvel character database
via their API.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone git@github.com:dtt101/superhero.git`
* `cd superhero`
* `npm install`
* `bower install`

## Marvel API

To access the Marvel API you will need to get an API key
from: http://developer.marvel.com/

Create a `.env` file at the root of the project with:

```
MARVEL_PUBLIC_KEY=YOURKEYGOESHERE
```

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

TODO: deployment instructions

## TODO

 * Style detail page
 * Remove loader package and use loading templates
 * Test quality
 * Build better detail page
 * About content
 * Deployment
