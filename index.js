export default function timeZone(date = new Date()) {
	const offset = date.getTimezoneOffset();
	const absOffset = Math.abs(offset);
	const hours = Math.floor(absOffset / 60);
	const minutes = absOffset % 60;
	const minutesOut = minutes > 0 ? ':' + ('0' + minutes).slice(-2) : '';
	return (offset < 0 ? '+' : '-') + hours + minutesOut;
}
