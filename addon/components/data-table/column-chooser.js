import Ember from 'ember';
import layout from 'ember-data-table-light/templates/components/data-table/column-chooser';

/**
 * @class ColumnChooser
 * @extends Ember.Component
 */
export default Ember.Component.extend({
  layout,
  tagName: 'ul',
  classNames: ['column-chooser'],

  actions: {
    checkboxChanged(column) {
      column.toggleProperty('hidden');
      this.sendAction('columnVisibilityChanged', column);
    }
  }
});
