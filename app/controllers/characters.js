import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['query', 'offset'],
  query: null,
  offset: 0,

  queryField: Ember.computed.oneWay('query'),

  meta: Ember.computed(function() {
    return this.store.metadataFor('character');
  }),

  actions: {
    search: function() {
      console.log('SEarch called');
      this.set('query', this.get('queryField'));
      this.set('offset', 0);
    },
    more: function() {
      this.set('offset', this.get('meta').offset);
    }
  }

});
