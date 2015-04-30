import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['query', 'offset'],
  query: null,
  offset: 0,
  increment: 20,

  queryField: Ember.computed.oneWay('query'),

  meta: function() {
    return this.get("content.meta");
  }.property('content.[]'),

  actions: {
    search: function() {
      this.set('query', this.get('queryField'));
      this.set('offset', 0);
    },
    next: function() {
      // TODO: check if there are any more results - compare offset to total
      var next = this.get('increment') + this.get('meta').offset;
      this.set('offset', next);
    }
  }
});
