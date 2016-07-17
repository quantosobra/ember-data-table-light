import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /custom-actions', function(assert) {
  server.create('user', {firstName: 'Joe'});
  visit('/custom-actions');

  andThen(function() {
    assert.equal($('td:contains(Joe)').length, 1);
    assert.equal(server.db.users.length, 1);
    click('.delete');

    andThen(function() {
      assert.equal($('td:contains(Joe)').length, 0);
      assert.equal(server.db.users.length, 0);
      assert.equal(currentURL(), '/custom-actions');
    });
  });
});
