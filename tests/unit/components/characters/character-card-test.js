import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('characters/character-card', {
  // Specify the other units that are required for this test
  needs: ['helper:truncateText']
});

test('it displays character information', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Ember.run(function() {
  //   component.set('character', [ 'Remote Control']);
  //   component.send('toggleElement');
  // });

  // Ember.run(function() {
  //   this.render();
  //   assert.equal(component._state, 'inDOM');
  // });

  // equal(this.$().find('ul li').length, 1)
});
