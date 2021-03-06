import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('about');
    this.resource('characters', function() {
      this.route('show', {
        path: ':character_id'
      });
    });
});

export default Router;
