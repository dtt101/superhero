import DS from 'ember-data';
import ENV from "superhero/config/environment";

export default DS.RESTAdapter.extend({
  host: 'http://gateway.marvel.com',
  namespace: 'v1/public',
  buildURL: function(type, id, snapshot) {
    return this._super(type, id, snapshot) + this.generateSignature();
  },
  generateSignature: function(){
    var ts = new Date().valueOf();
    var publicKey = ENV.MARVEL_PUBLIC_KEY;
    return "?ts=" + ts + "&apikey=" + publicKey;
  }
});
