import Ember from 'ember';
import EmberDataTableMixin from 'ember-data-table-light/mixins/ember-data-table';
import { module, test } from 'qunit';

module('Unit | Mixin | ember data table');

// Replace this with your real tests.
test('it works', function(assert) {
  let EmberDataTableObject = Ember.Object.extend(EmberDataTableMixin);
  let subject = EmberDataTableObject.create();
  assert.ok(subject);
});
