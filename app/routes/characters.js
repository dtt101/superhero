import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    query: {
      refreshModel: true
    }
  },

  model: function(params) {
    if (!params.query) {
      return this.store.findAll('character');
    }
    return this.store.find('character', { nameStartsWith: params.query });
  }
});
