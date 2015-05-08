import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  extract: function(store, type, payload, id, requestType) {
    var results = {};
    results['characters'] = payload.data.results;
    delete payload.data.results;
    results['meta'] = payload.data;
    return this._super(store, type, results, id, requestType);
  },

  extractSingle: function(store, type, payload, id) {
    var results = {};
    results['character'] = payload.characters[0];
    return this._super(store, type, results, id);
  }
});
