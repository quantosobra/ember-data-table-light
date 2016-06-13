import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('data-table/pagination', 'Integration | Component | data table/pagination', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{data-table/pagination}}`);

  assert.equal(this.$().text().trim(), '');
});
