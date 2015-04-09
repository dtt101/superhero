import Ember from 'ember';

export default Ember.Route.extend({
    queryParams: {
      query: {
        refreshModel: true
      },
      offset: {
        refreshModel: true
      }
    },

    model: function(params) {
      if (!params.query) {
        return this.store.find('character', { offset: params.offset });
      }
      return this.store.find('character', { nameStartsWith: params.query, offset: params.offset });
    }
});
