/* 
1.what is error handling ? what happens if error handling is not done ??
2.what is response object and how it is different from normal object??How response.json() converts??
3..then((res)=>console.log(res)); what is happening here ??
4.what it means console.err()??
*/

//1.

/* 
without error handling program crashes and stops suddenly.
error occurs when program tries to fetch data from wrong url then it throws error.
with error handling program continues running even if something goes wrong.
when error is handled,then error occured message will be printed.
in case of async await error is handled with try{} , catch(err){console.log(err)}

Error can be occured by following reasons :
1.incorrect url or server is down means many requests than expected,server is in maintence,
  internet connectivity problems,server crash due to crash or misconfiguration.
2.JSON Parsing Error
Error: If the response is not in JSON format, .json() will fail.
3.Reference error
4.Calling await outside an async function.
5.Rejected a promise error not handled with try catch.
*/


//2.

/*
A Response object is a special object returned by the fetch() function in JavaScript when making HTTP requests. 
It represents the HTTP response from the server.
response object will have meta data about http response like url of request,status__code,Headers --> content-type,authorization,
ok__property to know whether http request is successful or not.
we have response.json(),response.text(),response.blob(),..
response.json() goes and reads the entire readable stream based on type json,text,binary data... accordingly method is used for
conversion to js object ,string ,blob obj...
text is a json string.
1.JSON.parse(text) json string converts to js object.
2.JSON.stringify(jsobj) jsobj converts to json string.
3.response.json() does additional to 1 i.e joins chunks.
*/

//3.

/* 
console.log(res) prints "Hello", but it does not return any value.
If a function does not explicitly return something, it returns undefined by default.
The return in { return console.log(res); } still returns undefined, so there's no difference.
so it passes undefined in promise chaining.
*/

//4.

/* 
console.error() is used to log error messages, and it usually appears in red in the console.
It is different from console.log() because:
Purpose:
console.log() → For general messages.
console.error() → Specifically for error messages.
*/