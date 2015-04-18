import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function(serialized) {
    if (serialized) {
      serialized = serialized.path + "." + serialized.extension;
    }
    return serialized;
  },

  serialize: function(deserialized) {
    return deserialized;
  }
});
