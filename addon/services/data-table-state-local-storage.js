/* global localStorage */
import DataTableState from 'ember-data-table-light/services/data-table-state';

/**
 * @class DataTableStateLocalStorage
 * @extends DataTableState
 */
export default DataTableState.extend({
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
    localStorage.setItem(identifier, state);
  },

  load(identifier) {
    return localStorage.getItem(identifier);
  }
});
