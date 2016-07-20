import test from 'ava';
import m from './';

test(t => {
	console.log('Time zone:', m());
	t.regex(m(), /^[+-][\d:]+$/);
});
