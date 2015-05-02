import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('nav-bar', {});

test('it renders with two links', function(assert) {
  assert.expect(3);

  var component = this.subject();
  assert.equal(component._state, 'preRender');

  this.render();
  assert.equal(component._state, 'inDOM');

  assert.equal(this.$().find('a').length, 2);

});
