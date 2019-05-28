import test from 'ava';
import timeZone from '.';

test('main', t => {
	console.log('Time zone:', timeZone());
	t.regex(timeZone(), /^[+-][\d:]+$/);
});
