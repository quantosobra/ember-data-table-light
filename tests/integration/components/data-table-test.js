import { moduleForComponent, test } from 'ember-qunit';
import wait from 'ember-test-helpers/wait';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../helpers/setup-mirage';

moduleForComponent('data-table', 'Integration | Component | data table', {
  integration: true,
  setup: function() {
    startMirage(this.container);
  }
});

test('it renders', function(assert) {
  assert.expect(1);

  this.set('columns', [{label: 'Column'}]);
  this.render(hbs`{{data-table 'user' columns=columns}}`);

  return wait().then(() => {
    assert.ok(this.$('table').length);
  });
});
