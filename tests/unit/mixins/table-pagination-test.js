import Ember from 'ember';
import TablePaginationMixin from 'ember-data-table-light/mixins/table-pagination';
import { module, test } from 'qunit';

module('Unit | Mixin | table pagination');

test('no records', function(assert) {
  assert.expect(2);

  let TablePaginationObject = Ember.Object.extend(TablePaginationMixin);
  let subject = TablePaginationObject.create();
  assert.ok(subject);

  subject.set('totalRecords', 0);
  assert.equal(subject.get('pageNumbers'), 0, 'pageNumbers is zero when there are no records');
});

test('records fill less than one page', function(assert) {
  assert.expect(2);

  let TablePaginationObject = Ember.Object.extend(TablePaginationMixin);
  let subject = TablePaginationObject.create();
  assert.ok(subject);

  subject.set('totalRecords', 19);
  subject.set('recordsPerPage', 20);

  assert.equal(subject.get('pageNumbers'), 1, 'pageNumbers is 1 when records fill less than one page');
});

test('records fill exactly one page', function(assert) {
  assert.expect(2);

  let TablePaginationObject = Ember.Object.extend(TablePaginationMixin);
  let subject = TablePaginationObject.create();
  assert.ok(subject);

  subject.set('totalRecords', 20);
  subject.set('recordsPerPage', 20);

  assert.equal(subject.get('pageNumbers'), 1, 'pageNumbers is 1 when records fill exactly one page');
});

test('records fill more than one page', function(assert) {
  assert.expect(2);

  let TablePaginationObject = Ember.Object.extend(TablePaginationMixin);
  let subject = TablePaginationObject.create();
  assert.ok(subject);

  subject.set('totalRecords', 21);
  subject.set('recordsPerPage', 20);

  assert.equal(subject.get('pageNumbers'), 2, 'pageNumbers is 2 when records fill more than one page');
});
