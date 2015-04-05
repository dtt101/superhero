import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  extract: function(store, type, payload, id, requestType) {
    var characters = {};
    characters['characters'] = payload.data.results;
    return this._super(store, type, characters, id, requestType);
  }
});
