import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('transform:thumbnail', {});

test('It transforms the provided object into a single URL', function(assert) {
  var transform = this.subject();
  var obj = {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec',
    extension: 'jpg'
  };
  var uri = transform.deserialize(obj);
  assert.equal(
    uri,
    'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec.jpg',
    'Thumbnail returns a single URL'
  );
});
