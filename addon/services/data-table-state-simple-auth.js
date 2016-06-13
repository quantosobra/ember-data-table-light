import Ember from 'ember';
import DataTableState from 'ember-data-table-light/services/data-table-state';

const { warn } = Ember;

/**
 * @class DataTableStateSimpleAuth
 * @extends DataTableState
 */
export default DataTableState.extend({
  session: Ember.inject.service('session'),

  serialize() {
    let state = this._super(...arguments);
    return JSON.stringify(state);
  },

  deserialize(table, state) {
    try {
      let parsedState = JSON.parse(state);
      return this._super(table, parsedState);
    }
    catch (e) {
      // Error parsing saved data, will ignore
    }
  },

  save(identifier, state) {
    this.get('session').set(`data.${identifier}`, state);
  },

  load(identifier) {
    return this.get('session').get(`data.${identifier}`);
  }
});
