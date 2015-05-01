import {
  truncateText
} from '../../../helpers/truncate-text';
import { module, test } from 'qunit';

module('TruncateTextHelper');

test('it works', function(assert) {
  var result = truncateText('this text should be limited', {limit: 5});
  assert.ok(result);
});
