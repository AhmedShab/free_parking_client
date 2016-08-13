/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'find-parking-spot-client',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-eval' *.googleapis.com maps.gstatic.com",
      'font-src': "'self' fonts.gstatic.com",
      'connect-src': "'self' maps.gstatic.com",
      'img-src': "'self' *.googleapis.com maps.gstatic.com csi.gstatic.com data:",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maps.gstatic.com assets-cdn.github.com"
    }
  };

  ENV['g-map'] = {
    exclude: true,
    libraries: ['places', 'geometry'],
    key: 'AIzaSyB3arAOnNlpXIL8pPUvs9kYmUrr_n_oMBo',
    client: 'gme-your-unique-google-client-id',
    version: '3.26',
    language: 'en',
    protocol: 'https'
  };

  ENV['place-autocomplete'] = {
    exclude: true,
    key: 'AIzaSyB3arAOnNlpXIL8pPUvs9kYmUrr_n_oMBo',
    client: 'gme-myclientid'
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
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
