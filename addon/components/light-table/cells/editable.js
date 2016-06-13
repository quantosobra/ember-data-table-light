import Ember from 'ember';
import Cell from 'ember-light-table/components/cells/base';
import layout from 'ember-data-table-light/templates/components/light-table/cells/editable';

const { computed } = Ember;

/**
 * @class EditableCell
 * @extends Cell
 */
export default Cell.extend({
  layout,
  classNameBindings: ['isEditing'],
  isEditing: false,
  editedValue: computed.oneWay('value'),

  save() {
    if (this.get('editedValue') !== this.get('value')) {
      this.get('row.content').set(this.get('column.valuePath'), this.get('editedValue'));
      this.get('row.content').save();
    }
  },

  doubleClick() {
    if (!this.get('isEditing')) {
      this.set('isEditing', true);
    }
  },

  click() {
    if (this.get('isEditing')) {
      return false;
    }
  },

  didRender() {
    if (this.get('isEditing')) {
      this.$('input').focus();
    }
  },

  actions: {
    exitEditMode: function() {
      this.set('isEditing', false);
      this.save();
    }
  }
});
