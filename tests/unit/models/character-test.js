import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('character', 'Character Model', {
  // Specify the other units that are required for this test.
  needs: ['model:event']
});

test('Character is a valid Ember Data Model', function(assert) {
  var character = this.subject({
    id: '1011334',
    name: '3-D Man',
    description: 'A man in 3-D',
    resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
    modified: '2013-10-17T14:41:30-0400',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec',
      extension: 'jpg'
    }
  });

  assert.ok(character);
  assert.ok(character instanceof DS.Model);
});
