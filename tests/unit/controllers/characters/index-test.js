import Ember from 'ember';
import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:characters/index', {});

test('it provides character search', function(assert) {
  assert.expect(5);

  var ctrl = this.subject();

  assert.equal(ctrl.get('query'), null);
  assert.equal(ctrl.get('offset'), 0);
  assert.deepEqual(ctrl.get('queryParams'), ["query", "offset"]);

  ctrl.set('queryField', 'test');
  ctrl.send('search');

  assert.equal(ctrl.get('query'), 'test');
  assert.equal(ctrl.get('offset'), 0);

});

test('it provides next page functionality', function(assert) {
  assert.expect(4);

  var ctrl = this.subject();

  var metaData = {
    "offset": 0,
    "limit": 20,
    "total": 1485,
    "count": 20
  };
  ctrl.set('meta', metaData);

  assert.equal(ctrl.get('offset'), 0);
  assert.equal(ctrl.get('increment'), 20);

  ctrl.send('next');

  assert.equal(ctrl.get('offset'), 20);
  assert.equal(ctrl.get('increment'), 20);
});
