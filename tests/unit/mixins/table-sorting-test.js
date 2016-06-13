import Ember from 'ember';
import TableSortingMixin from 'ember-data-table-light/mixins/table-sorting';
import { module, test } from 'qunit';

module('Unit | Mixin | table sorting');

test('no default sorting', function(assert) {
  assert.expect(2);

  let TableSortingObject = Ember.Object.extend(TableSortingMixin);
  let subject = TableSortingObject.create();

  assert.ok(subject);
  assert.notOk(subject.get('hasSorting'), 'table has no default sorting');
});

test('sortColumn', function(assert) {
  assert.expect(2);

  let TableSortingObject = Ember.Object.extend(TableSortingMixin);
  let subject = TableSortingObject.create();
  assert.ok(subject);

  subject.sortColumn('column', 'asc');
  assert.ok(subject.get('hasSorting'), 'table has sorting after class to sortColumn');
});

test('removeSorting', function(assert) {
  assert.expect(2);

  let TableSortingObject = Ember.Object.extend(TableSortingMixin);
  let subject = TableSortingObject.create();
  assert.ok(subject);

  subject.sortColumn('column', 'asc');
  subject.removeSorting();
  assert.notOk(subject.get('hasSorting'), 'table does not have sorting after removeSorting');
});
