import { moduleForComponent, test } from 'ember-qunit';
import { Column, Row } from 'ember-light-table';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('light-table/cells/editable', 'Integration | Component | light table/cells/editable', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{light-table/cells/editable}}`);
  assert.equal(this.$().text().trim(), '');
});

test('it renders value', function(assert) {
  assert.expect(1);

  this.set('column', new Column({ valuePath: 'foo' }));
  this.set('row', new Row({ foo: 'bar' }));

  this.render(hbs`{{light-table/cells/editable column row rawValue=(get row column.valuePath)}}`);

  assert.equal(this.$().text().trim(), 'bar');
});

test('it renders editable', function(assert) {
  assert.expect(2);

  this.set('column', new Column({ valuePath: 'foo' }));
  this.set('row', new Row({ foo: 'bar' }));

  this.render(hbs`{{light-table/cells/editable column row rawValue=(get row column.valuePath) isEditing=true}}`);

  assert.equal(this.$('input').length, 1);
  assert.equal(this.$('input').val(), 'bar');
});
