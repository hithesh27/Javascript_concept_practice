/* 

Fetch function is a way to make http requests in javascript.
It returns a promise that resolves to response object.

What does Fetch return ??
Result of a fetch is a promise that resolves once http response is available.
Resolved value is an object of response class.
This response object represents http response to a given request.
contains meta data like status code,headers,actual data(which is still in raw format).

response object provides methods like :

1.headers. contains http headers
2.status. http status code
3.ok. A boolean indicating success or not .in range of (200-299).
4.json() it is a method to parse the body of response as json.it parses raw json into javascript object.
5.text() it is a method to parse the body of response as plain string.
6.body A readable stream of raw response body.

parse json is converting a json-formatted string into a javascript object.
JSON.parse(): String → JavaScript object.
JSON.stringify(): JavaScript object → String.
res.text(): Raw response → String.
res.json(): Raw JSON response → JavaScript object.
*/