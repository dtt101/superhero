import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('adapter:application', 'ApplicationAdapter', {});

test('Adapter builds the correct URL', function(assert) {
  var adapter = this.subject();
  var pattern = /^\/v1\/public\/characters\?ts=\d+\&apikey=.*$/;
  assert.equal(
    pattern.test(adapter.buildURL('character')),
    true,
    "buildURL should create a valid URL"
  );
});

test('Adapter generates the correct signature', function(assert) {
  var adapter = this.subject();
  var pattern = /^\?ts=\d+\&apikey=.*$/;
  assert.equal(
    pattern.test(adapter.generateSignature()),
    true,
    "generateSignature should create the correct query params"
  );
});
