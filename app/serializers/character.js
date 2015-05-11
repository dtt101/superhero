import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {

  attrs: {
    events: { embedded: 'always' }
  },

  extract: function(store, type, payload, id, requestType) {
    var results = {};
    results['characters'] = payload.data.results;
    results['meta'] = payload.data;
    for (var character of results['characters']) {
      character.events = this.addIdToEvents(character.events.items);
    }
    return this._super(store, type, results, id, requestType);
  },

  extractSingle: function(store, type, payload, id) {
    var results = {};
    results['character'] = payload.characters[0];
    return this._super(store, type, results, id);
  },

  addIdToEvents: function(events) {
    var results = events.map(function(event) {
      event.id = event.resourceURI.substr(event.resourceURI.lastIndexOf('/') + 1);
      return event;
    });
    return results;
  }

});
