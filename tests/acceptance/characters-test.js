import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'superhero/tests/helpers/start-app';
import charactersData from '../fixtures/characters';

var application, server;

module('Acceptance: Characters', {
  beforeEach: function() {
    application = startApp();
    var characters = charactersData();

    server = new Pretender(function() {
      this.get('/v1/public/characters', function(request) {
       var responseData = JSON.stringify(characters);
        return [
          200,
          {"Content-Type": "application/json"},
          responseData
        ];
      });
    });

  },

  afterEach: function() {
    Ember.run(application, 'destroy');
    server.shutdown();
  }
});

test('visiting /characters should show a list of characters', function(assert) {
  visit('/characters');

  andThen(function() {
    assert.equal(currentURL(), '/characters');
    assert.equal(find('div.character-card').length, 20, 'The page should have 20 characters');
  });
});

test('Clicking the next page button should load a new page of characters', function(assert) {
  visit('/characters');

  andThen(function() {
    click('button.button-next-page');
  });

  andThen(function() {
    assert.equal(currentURL(), '/characters?offset=20');
    assert.equal(find('.character-card').length, 20, 'The page should have 20 characters');
  });
});

test('The page should show a top ten search heading', function(assert) {
  visit('/characters');
  andThen(function() {
    assert.equal(find('.search-heading').text(), 'Top Searches', 'The page should have a top searches area');
  });
});

test('The page should show a top ten list of searches', function(assert) {
  visit('/characters');

  andThen(function() {
    assert.equal(find('.top-searches .top-search').length, 10, 'The page should have top ten searches');
  });
});
