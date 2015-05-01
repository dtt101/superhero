import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('adapter:application', 'ApplicationAdapter', {});

test('Adapter builds the correct URL', function(assert) {
  var adapter = this.subject();
  assert.ok(adapter);
  var pattern = /^\/v1\/public\/characters\?ts=\d+\&apikey=.*$/;
  assert.equal(
    pattern.test(adapter.buildURL('character')),
    true,
    "buildURL should create a valid URL"
  );
});
