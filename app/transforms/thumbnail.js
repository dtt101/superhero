import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function(serialized) {
    if (serialized) {
      serialized = serialized.path.replace('http://','https://') + "." + serialized.extension;
    }
    return serialized;
  },

  serialize: function(deserialized) {
    return deserialized;
  }
});
