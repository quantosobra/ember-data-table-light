import Ember from 'ember';
import layout from 'ember-data-table-light/templates/components/data-table/empty';

/**
 * @class Empty
 * @extends Ember.Component
 */
export default Ember.Component.extend({
  layout,

  message: 'No data to display'
});
