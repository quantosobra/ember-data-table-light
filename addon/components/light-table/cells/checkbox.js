import Ember from 'ember';
import Cell from 'ember-light-table/components/cells/base';
import layout from 'ember-data-table-light/templates/components/light-table/cells/checkbox';

const { computed } = Ember;

/**
 * @class CheckboxCell
 * @extends Cell
 */
export default Cell.extend({
  layout,

  icon: computed('row.selected', 'iconChecked', 'iconUnchecked', function() {
    return this.get('row.selected') ? this.get('iconChecked') : this.get('iconUnchecked');
  }),

  iconChecked: 'fa fa-check-square-o',
  iconUnchecked: 'fa fa-square-o',

  click() {
    this.toggleProperty('row.selected');
    return false;
  }
});
