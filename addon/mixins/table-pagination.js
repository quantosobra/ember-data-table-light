import Ember from 'ember';

const { Mixin, computed } = Ember;

/**
 * Mixin that adds support for pagination in a table.
 *
 * @class TablePaginationMixin
 * @extends Ember.Mixin
 */
export default Mixin.create({
  /**
   * Current page number.
   *
   * @property currentPage
   * @type Number
   * @default 1
   * @public
   */
  currentPage: 1,

  /**
   * Number of records shown by page.
   *
   * @property recordsPerPage
   * @type Number
   * @default 50
   * @public
   */
  recordsPerPage: 50,

  /**
   * Total number of records that are paginated. This is used to calculate the number of pages.
   *
   * @property totalRecords
   * @type Number
   * @default null
   * @public
   */
  totalRecords: null,

  /**
   * Number of existing pages, calculated from {{#crossLink TablePagination#currentPage}}currentPage{{/crossLink}} and
   * {{#crossLink TablePagination#recordsPerPage}}recordsPerPage{{/crossLink}}
   *
   * @property pageNumbers
   * @type Number
   * @public
   */
  pageNumbers: computed('recordsPerPage', 'totalRecords', function() {
    return Math.ceil(this.get('totalRecords') / this.get('recordsPerPage'));
  })
});
