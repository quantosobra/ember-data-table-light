import Ember from 'ember';

const { Service, get, assert } = Ember;

/**
 * @class DataTableState
 * @extends Ember.Service
 */
export default Service.extend({
  /**
   * Serializes the current state of the table to be saved.
   *
   * @param {Table} table Object for the table to be serialized.
   * @return {mixed} state Serialized state for the table.
   */
  serialize(table) {
    let visibleColumns = get(table, 'visibleColumns').mapBy('valuePath');

    return {visibleColumns};
  },

  /**
   * Deserializes a saved state and applies it's values to the table.
   *
   * @param {Table} table Table object where the state is to be applied.
   * @param {mixed} state Saved state object the be applied.
   */
  deserialize(table, state) {
    get(table, 'columns').filter((item) => {
      return state.visibleColumns.indexOf(item.get('valuePath')) === -1;
    }).setEach('hidden', true);
  },

  /**
   * Saves the current state of the table.
   *
   * @param {String} identifier Unique identifier for the table, used later to
   * load the status.
   * @param {mixed} state Table state as returned by `serialize()`.
   * @param {Table} table Object for the table that should be saved.
   */
  save(/* identifier, state, table */) {
    assert('The save method must be implemented by a subclass');
  },

  /**
   * Loads a previously saved state for a table.
   *
   * @param {String} identifier Unique identifier for the table to load status.
   * @param {Table} table Object for the table that should be loaded.
   * @return {mixed} Saved state for the specified table, that will be passed
   *   to `deserialize()`.
   */
  load(/* identifier, table */) {
    assert('The load method must be implemented by a subclass');
  }
});
