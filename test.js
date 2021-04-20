import test from 'ava';
import timeZone from './index.js';

test('main', t => {
	t.log('Time zone:', timeZone());
	t.regex(timeZone(), /^[+-][\d:]+$/);
});
