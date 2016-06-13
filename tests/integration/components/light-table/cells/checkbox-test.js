import { moduleForComponent, test } from 'ember-qunit';
import { Row } from 'ember-light-table';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('light-table/cells/checkbox', 'Integration | Component | light table/cells/checkbox', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`{{light-table/cells/checkbox}}`);
  assert.equal(this.$().text().trim(), '');
  assert.equal(this.$('i').length, 1);
});

test('icon changes when row is selected', function(assert) {
  assert.expect(4);

  this.set('row', new Row({selected: false}));
  this.render(hbs`{{light-table/cells/checkbox row=row iconChecked='checked' iconUnchecked='unchecked'}}`);

  assert.notOk(this.get('row.selected'));
  assert.ok(this.$('i').hasClass('unchecked'), 'icon is unchecked');

  this.$('i').click();

  assert.ok(this.get('row.selected'), 'row was selected on click');
  assert.ok(this.$('i').hasClass('checked'), 'icon is checked');
});
