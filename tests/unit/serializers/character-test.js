import {
  moduleFor,
  test
} from 'ember-qunit';
import data from '../../fixtures/characters';

moduleFor('serializer:character', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

test('it serializes the character data', function(assert) {
  assert.expect(1);
  var serializer = this.subject();

  var payload = JSON.stringify(data());
  var store = null;
  var type = null;
  var id = null;
  var requestType = null;
  var serializedData = serializer.serialize(store, type, payload, id, requestType);

  assert.equal(serializedData['charcters'].length, 20);

});
