import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'superhero/tests/helpers/start-app';
import data from '../../fixtures/characters';

var application, server;

module('Acceptance: Characters', {
  beforeEach: function() {
    application = startApp();
    var characters = data();

    server = new Pretender(function() {
      this.get('/v1/public/characters', function(request) {
        return [
          200,
          {"Content-Type": "application/json"},
          JSON.stringify(characters)
        ];
      });
    });

  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /characters should show a list of characters', function(assert) {
  visit('/characters');

  andThen(function() {
    assert.equal(currentURL(), '/characters');
    assert.equal(find('div.character-card').length, 20, 'The page should have 1 character');
  });
});
