import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('data-table/search', 'Integration | Component | data table/search', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`{{data-table/search}}`);

  assert.equal(this.$('input').length, 1);
  assert.equal(this.$('button').length, 1);
});
