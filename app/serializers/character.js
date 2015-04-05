import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  extract: function(store, type, payload, id, requestType) {
    var results = {};
    results['characters'] = payload.data.results;
    results['meta'] = payload.data;
    delete results.meta.results;
    return this._super(store, type, results, id, requestType);
  }
});
