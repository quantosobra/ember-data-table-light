import Ember from 'ember';
import layout from 'ember-data-table-light/templates/components/data-table/pagination';

/**
 * @class Pagination
 * @extends Ember.Component
 */
export default Ember.Component.extend({
  layout,
  tagName: 'ul',
  classNames: ['pagination'],

  /**
   * Current page number.
   *
   * @property currentPage
   * @type Number
   * @public
   */
  currentPage: null,

  /**
   * Total number of pages available in pagination.
   *
   * @property totalPages
   * @type Number
   * @public
   */
  totalPages: null,

  /**
   * The first page number, if it exists. If there are no pages to paginate,
   * this property has the value `false`. Otherwise, it will be always `1`.
   *
   * @property firstPage
   * @type Number|Boolean
   * @public
   */
  firstPage: Ember.computed('totalPages', function() {
    if (this.get('totalPages') === 0) {
      return false;
    }

    return 1;
  }),

  /**
   * Number of the previous page. If the current page is the first one, this
   * property has the value `false`, as there is no previous page to be shown.
   *
   * @property previousPage
   * @type Number|Boolean
   * @public
   */
  previousPage: Ember.computed('currentPage', function() {
    let current = Number(this.get('currentPage'));
    let first = Number(this.get('firstPage'));

    if (current === first) {
      return false;
    }

    return current - 1;
  }),

  /**
   * Number of the next page. If the current page is the last one, this property
   * has the value `false`, as there is no next page to be shown.
   *
   * @property nextPage
   * @type Number|Boolean
   * @public
   */
  nextPage: Ember.computed('currentPage', 'totalPages', function() {
    let current = Number(this.get('currentPage'));
    let total = Number(this.get('totalPages'));

    if (current === total) {
      return false;
    }

    return current + 1;
  }),

  /**
   * The last page number, if it exists. If there are no pages to paginate,
   * this property has the value `false`.
   *
   * @property lastPage
   * @type Number|Boolean
   * @public
   */
  lastPage: Ember.computed.reads('totalPages'),

  /**
   * Array with all page numbers, numbered from 1 to the last page number.
   *
   * @property pageNumbers
   * @type Number[]
   * @public
   */
  pageNumbers: Ember.computed('totalPages', function() {
    let pages = [];
    let count = this.get('totalPages');

    for (let i = 1; i <= count; ++i) {
      pages.push(i);
    }

    return pages;
  }),

  actions: {
    /**
     * Action executed when the current page is changed.
     *
     * @event pageChanged
     * @param {Number} page Number of the new page.
     */
    pageSelected(pageNumber) {
      let page = parseInt(pageNumber);

      if (!isNaN(page)) {
        this.set('currentPage', page);
        this.sendAction('pageChanged', page);
      }
    }
  }
});
