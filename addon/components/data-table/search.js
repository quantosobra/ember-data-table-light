import Ember from 'ember';
import layout from 'ember-data-table-light/templates/components/data-table/search';

/**
 * @class Search
 * @extends Ember.Component
 */
export default Ember.Component.extend({
  layout,
  classNames: ['input-group'],

  /**
   * Text entered by the user in the search field.
   *
   * @property searchText
   * @type String
   * @default ''
   * @protected
   */
  searchText: '',

  /**
   * Text used as placeholder for the search field.
   *
   * @property inputPlaceholder
   * @type String
   * @default 'Search...'
   * @public
   */
  inputPlaceholder: 'Search...',

  /**
   * CSS class name for an icon to be shown in the search button.
   *
   * @property searchButtonIcon
   * @type String
   * @default 'fa fa-search'
   * @public
   */
  searchButtonIcon: 'fa fa-search',

  /**
   * Text used on the search button.
   *
   * @property searchButtonText
   * @type String
   * @default 'Search'
   * @public
   */
  searchButtonText: 'Search',

  actions: {
    /**
     * Action called when the user submit the search.
     *
     * @event search
     * @param {String} searchText Text to search.
     */
    search() {
      this.sendAction('search', this.get('searchText'));
    }
  }
});
