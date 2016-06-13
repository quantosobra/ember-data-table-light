import Ember from 'ember';

const { Mixin, computed } = Ember;

/**
 * Mixin that adds support for sorting in a table.
 *
 * @class TableSortingMixin
 * @extends Ember.Mixin
 */
export default Mixin.create({
  /**
   * Property that is used for sorting the table.
   *
   * @property sortProperty
   * @type String
   * @default null
   * @public
   */
  sortProperty: null,

  /**
   * Sort direction ('asc' or 'desc).
   *
   * @property direction
   * @type String
   * @default 'asc'
   * @public
   */
  direction: 'asc',

  /**
   * Determines if the table is sorted or not.
   *
   * @property hasSorting
   * @type Boolean
   * @public
   */
  hasSorting: computed('sortProperty', 'direction', function() {
    if (this.get('sortProperty') && this.get('direction')) {
      return true;
    }

    return false;
  }),

  /**
   * Configures table sorting for specified `column` and `direction`.
   *
   * @method sortColumn
   * @param {String} property Property name for the column to be sorted by.
   * @param {String} direction Sort direction ('asc' or 'desc).
   * @public
   */
  sortColumn(property, direction) {
    this.set('sortProperty', property);
    this.set('direction', direction);
  },

  /**
   * Clear table sorting previously defined with {{#crossLink TableSorting#sortColumn:method}}sortColumn{{/crossLink}}.
   *
   * @method removeSorting
   * @public
   */
  removeSorting() {
    this.set('sortProperty', null);
    this.set('direction', 'asc');
  }
});
