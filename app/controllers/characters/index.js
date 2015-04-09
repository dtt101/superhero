import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['query', 'offset'],
  query: null,
  offset: 0,

  queryField: Ember.computed.oneWay('query'),

  meta: function() {
    return this.get("content.meta");
  }.property('content.[]'),

  actions: {
    search: function() {
      this.set('query', this.get('queryField'));
      this.set('offset', 0);
    },
    more: function() {
      this.set('offset', this.get('meta').offset);
    }
  }
});
