import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'superhero/tests/helpers/start-app';
import charactersData from '../fixtures/characters';
import characterData from '../fixtures/character';

var application, server;

module('Acceptance: Characters', {
  beforeEach: function() {
    application = startApp();
    var characters = charactersData();
    var character = characterData();

    server = new Pretender(function() {
      this.get('/v1/public/characters', function(request) {
       var responseData = JSON.stringify(characters);
        return [
          200,
          {"Content-Type": "application/json"},
          responseData
        ];
      });

      this.get('/v1/public/characters/1009609', function(request) {
        var responseData = JSON.stringify(character);
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

test('visiting /characters/1009609 shows character detail', function(assert) {
  visit('/characters/1009609');

  andThen(function() {
    assert.equal(currentURL(), '/characters/1009609');
    assert.equal(find('.heading').text(), 'Spider-Girl (May Parker)', 'Should show character heading');
    assert.equal(
      find('.description').text(),
      "May \"Mayday\" Parker is the daughter of Spider-Man and Mary Jane Watson-Parker. Born with all her father's powers-and the same silly sense of humor-she's grown up to become one of Earth's most trusted heroes and a fitting tribute to her proud papa.",
      'Should show character descripton'
    );
  });
});
