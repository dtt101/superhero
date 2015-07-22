/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'superhero',
    environment: environment,
    firebase: 'https://superhero-demo.firebaseio.com/',
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
      'connect-src': "'self' gateway.marvel.com wss://*.firebaseio.com ws://46.101.63.236:*",
      'img-src': "'self' i.annihil.us",
      'script-src': "'self' localhost:35729 0.0.0.0:35729 46.101.63.236:*"
    },
    hostURL: 'https://gateway.marvel.com',
    MARVEL_PUBLIC_KEY: process.env.MARVEL_PUBLIC_KEY,
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    ENV.hostURL = undefined;
  }

  if (environment === 'production') {

  }

  return ENV;
};
