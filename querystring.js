var querystring = require('querystring');

var str = 'foo=bar&abc=xyz&abc=123';

console.log(querystring.parse(str));