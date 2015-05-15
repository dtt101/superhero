import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'superhero/tests/helpers/start-app';
import characterData from '../fixtures/character';

var application, server;

module('Acceptance: Character', {
  beforeEach: function() {
    application = startApp();
    var character = characterData();

    server = new Pretender(function() {
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
    server.shutdown();
  }
});

test('visiting /characters/1009609 shows character detail', function(assert) {
  assert.expect(3);
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

test('visiting /characters/1009609 shows key events for the character', function(assert) {
  assert.expect(2);
  visit('/characters/1009609');
  andThen(function() {
    assert.equal(find('.events .event').length, 1, 'Should show one event');
    assert.equal(
      find('.events .event:first').text(),
      'Fear Itself',
      'Should show event name'
    );
  });
});
