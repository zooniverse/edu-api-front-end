/*
Configuration Settings
----------------------

The config settings change depending on which environment the app is running in.
By default, this is the development environment, but this can be changed either by:

* An env query string, e.g. localhost:3998?env=production
  (This changes the Panoptes JS Client does)
* The NODE_ENV environment variable on the system running the app.

 */

var DEFAULT_ENV = 'development';
var envFromBrowser = locationMatch(/\W?env=(\w+)/);
var envFromShell = process.env.NODE_ENV;
var env = envFromBrowser || envFromShell || DEFAULT_ENV;

if (!env.match(/^(production|staging|development)$/)) {
  throw new Error(`Error: Invalid Environment - ${envFromShell}`);
}

const baseConfig = {
  'development': {
    panoptesAppId: '397e9bf4e29e75c0a092261ebe3338d3ef2687f2c5935d55c7ca0f63ecc2dd33',
    astroProjects: ['1315']
  },
  'production': {
    panoptesAppId: '',
    astroProjects: []
  },
};
baseConfig.staging = baseConfig.development;

const config = baseConfig[env];
export { env, config };

// Try and match the location.search property against a regex. Basically mimics
// the CoffeeScript existential operator, in case we're not in a browser.
function locationMatch(regex) {
  var match;
  if (typeof location !== 'undefined' && location !== null) {
    match = location.search.match(regex);
  }
  return (match && match[1]) ? match[1] : undefined;
}