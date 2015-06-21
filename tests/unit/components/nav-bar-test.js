import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('nav-bar', {});

test('it renders', function(assert) {
  assert.expect(1);

  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // this.render();
  // assert.equal(component._state, 'inDOM');

  // assert.equal(this.$().find('a').length, 2);

});
