import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('event', 'Event Model', {
  // Specify the other units that are required for this test.
  needs: []
});

test('Event is a valid Ember data model', function(assert) {
  var eventModel = this.subject({
    id: '1',
    name: 'Fear Itself',
    resourceURI: 'http://www.example.com/test'
  });

  assert.ok(eventModel);
  assert.ok(eventModel instanceof DS.Model);
  assert.equal(eventModel.get('name'), 'Fear Itself');
  assert.equal(eventModel.get('resourceURI'), 'http://www.example.com/test');
});
