import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('data-table/loading', 'Integration | Component | data table/loading', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{data-table/loading}}`);
  assert.equal(this.$().text().trim(), '');
});
