import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('characters/character-card', {
  needs: ['helper:truncateText']
});

test('it displays character information', function(assert) {
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  var character = {
    id: 1,
    name: "Test name",
    description: "Test description",
    thumbnail: "/img/image_not_available.jpg"
  };

  Ember.run(function() {
    component.set('character', character);
  });

  assert.equal(this.$().find('.character-name').text(), character.name);
  assert.equal(this.$().find('.character-description').text().trim(), character.description);
  assert.equal(this.$().find('.character-image').attr('src'), character.thumbnail);
});
