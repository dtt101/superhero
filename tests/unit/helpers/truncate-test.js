import {
  truncateText
} from '../../../helpers/truncate-text';
import { module, test } from 'qunit';

module('TruncateTextHelper');

// Replace this with your real tests.
test('it works', function(assert) {
  var result = truncateText('this text should be limited', {limit: 5});
  assert.ok(result);
});
