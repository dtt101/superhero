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

  resultsAvailable: Ember.computed('content.[]', function() {
    let total = this.get('meta').total - this.get('increment');
    return (this.get('offset') <= total);
  }),

  actions: {
    search: function() {
      this.set('query', this.get('queryField'));
      this.set('offset', 0);
    },
    next: function() {
      var next = this.get('increment') + this.get('meta').offset;
      this.set('offset', next);
    }
  }
});
