import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  modified: DS.attr('date'),
  resourceURI: DS.attr('string'),
  thumbnail: DS.attr('thumbnail'),
  events: DS.hasMany('event', {
    async: false
  })
});
