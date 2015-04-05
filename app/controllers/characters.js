import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['query'],
  query: null,

  queryField: Ember.computed.oneWay('query'),

  actions: {
    search: function() {
      this.set('query', this.get('queryField'));
    }
  }

});
