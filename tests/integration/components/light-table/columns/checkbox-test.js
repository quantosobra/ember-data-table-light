import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('light-table/columns/checkbox', 'Integration | Component | light table/columns/checkbox', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`{{light-table/columns/checkbox}}`);
  assert.equal(this.$().text().trim(), '');
  assert.equal(this.$('i').length, 1);
});
