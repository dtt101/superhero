import {
  truncateText
} from '../../../helpers/truncate-text';
import { module, test } from 'qunit';

module('TruncateTextHelper');

test('it truncates text to the specified limit', function(assert) {
  var result = truncateText(['this text should be limited'], {limit: 5});
  assert.equal(result, 'th...');
});
