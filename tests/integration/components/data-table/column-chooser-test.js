import { moduleForComponent, test } from 'ember-qunit';
import { Table } from 'ember-light-table';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('data-table/column-chooser', 'Integration | Component | data table/column chooser', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{data-table/column-chooser}}`);
  assert.equal(this.$().text().trim(), '');
});

test('not hideable columns are not listed', function(assert) {
  assert.expect(2);

  this.set('table', new Table([{label: 'hideable'}, {label: 'not hideable', hideable: false}]));

  this.render(hbs`{{data-table/column-chooser table=table}}`);
  assert.equal(this.$('li').length, 1);
  assert.equal(this.$('li').text().trim(), 'hideable');
});
