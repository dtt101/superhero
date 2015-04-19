import Ember from 'ember';

export function truncateText(params, options) {
  var text = params[0];
  var limit = options.limit || 42;
  if (text.length > limit) {
    text = text.substr(0, limit - 3) + "...";
  }
  return text;
}

export default Ember.HTMLBars.makeBoundHelper(truncateText);
