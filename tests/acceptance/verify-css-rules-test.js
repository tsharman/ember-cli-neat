import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | verify neat');

test('check that neat is processing includes', function(assert) {
  visit('/');
  const list = '.test-grid';
  const firstItem = `${list} li:eq(0)`;

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find(list).css('display'), 'block');
    assert.equal(find(firstItem).css('display'), 'list-item');
    assert.equal(find(firstItem).css('float'), 'left');
    assert.equal(find(firstItem).css('margin-left'), '20px');
  });
});
