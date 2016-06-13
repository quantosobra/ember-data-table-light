import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('data-table/empty', 'Integration | Component | data table/empty', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{data-table/empty message='empty'}}`);
  assert.equal(this.$().text().trim(), 'empty');
});
