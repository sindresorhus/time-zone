# time-zone

> Pretty [time zone](https://en.wikipedia.org/wiki/Time_zone): `+2` or `-9:30`


## Install

```
$ npm install time-zone
```


## Usage

```js
const timeZone = require('time-zone');

// Current time zone (in Norway)
timeZone();
//=> '+2'

// Time zone in February (in Norway)
timeZone(new Date(2016, 1, 1));
//=> '+1'

// Current time zone (in French Polynesia)
timeZone();
//=> '-9:30'
```


## API

### timeZone([date])

#### date

Type: `Date`<br>
Default: `new Date()`

Custom date.
