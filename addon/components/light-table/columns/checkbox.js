import Ember from 'ember';
import Column from 'ember-light-table/components/columns/base';
import layout from 'ember-data-table-light/templates/components/light-table/columns/checkbox';

const { computed } = Ember;

/**
 * @class CheckboxColumn
 * @extends Column
 */
export default Column.extend({
  layout,

  iconChecked: 'fa fa-check-square-o',
  iconUnchecked: 'fa fa-square-o',

  notSelectedRows: computed.filterBy('table.rows', 'selected', false),
  allSelected: computed.empty('notSelectedRows'),

  icon: computed('allSelected', function() {
    return this.get('allSelected') ? this.get('iconChecked') : this.get('iconUnchecked');
  }),

  click() {
    this.get('table.rows').setEach('selected', !this.get('allSelected'));
  }
});
