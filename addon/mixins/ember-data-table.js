import Ember from 'ember';

const { Mixin, inject } = Ember;

/**
 * @class EmberDataTableMixin
 * @extends Ember.Mixin
 */
export default Mixin.create({
  store: inject.service('store'),

  /**
   * Ember Data model name to show in the table.
   *
   * @property modelName
   * @type String
   * @public
   */
  modelName: null,

  /**
   * Indicates if the table is currently loading data from Ember Data store.
   *
   * @property isLoading
   * @type Boolean
   * @default false
   * @public
   */
  isLoading: false,

  /**
   * Text used in search.
   *
   * @property searchText
   * @type String
   * @default ''
   * @public
   */
  searchText: '',

  /**
   * Builds the object used as second parameter to the
   * {{#crossLink "DS.Store/query:method"}}{{/crossLink}} method in the store.
   *
   * @method _getFilters
   * @protected
   * @return {Object}
   */
  _getFilters() {
    let filters = {};

    if (this.get('pagination')) {
      filters.page = this.get('currentPage');
      filters.limit = this.get('recordsPerPage');
    }

    if (this.get('hasSorting')) {
      filters.sort = this.get('sortProperty');
      filters.dir = this.get('direction');
    }

    if (this.get('search')) {
      filters.search = this.get('searchText');
    }

    return filters;
  },

  /**
   * Query records from Ember Data store, using the configured filter options
   * (pagination, sorting and search).
   *
   * @method _fetchData
   * @protected
   */
  _fetchData() {
    let filters = this._getFilters();

    this.set('isLoading', true);
    this.table.setRows([]);

    this.get('store').query(this.get('modelName'), filters).then((records) => {
      this.table.setRows(records);
      this.set('totalRecords', records.get('meta.total'));
      this.set('isLoading', false);
    });
  }
});
