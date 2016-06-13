import Ember from 'ember';

const { getWithDefault } = Ember;

const DEFAULTS = {
  stateStorage: 'local-storage'
};

/**
 * Ember Data Table Light's configuration object.
 *
 * To change any of these values, set them on the application's environment object, e.g.:
 *
 * ```js
 * // config/environment.js
 * ENV['ember-data-table-light'] = {
 *   stateStorage: 'simple-auth'
 * };
 * ```
 *
 * @class Configuration
 * @extends Object
 * @module ember-data-table-light/configuration
 * @public
 */
export default {
  /**
   * The storage used to save table's state.
   *
   * @property stateStorage
   * @readOnly
   * @static
   * @type String
   * @default 'local-storage'
   * @public
  */
  stateStorage: DEFAULTS.stateStorage,

  load(config) {
    for (let property in this) {
      if (this.hasOwnProperty(property) && Ember.typeOf(this[property]) !== 'function') {
        this[property] = getWithDefault(config, property, DEFAULTS[property]);
      }
    }
  }
};
