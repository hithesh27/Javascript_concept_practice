//json is a string with a key value pairs where key is always a string and value is any datatype 



//parsing json text means
//converting a json formatted string into a usable data structure
//this same conversion is done in java and python as well
//universal, standardized to send data 



/* Language Independence
Objects are tied to their programming languages.
A Python object can't just "travel" to a JavaScript environment or database because each language has
 its own syntax and object model.
JSON is language-agnostic. It can be easily serialized (converted to text) 
and deserialized (converted back to a native object) in any language.
Example:
Python converts {"name": "Alice"} to JSON: {"name": "Alice"}
JavaScript then parses that JSON string back into {name: "Alice"}. */

//JSON.parse() converts a json-formatted string into object
/*
const jsontext='{"name":Hithesh,"id":123}';
const obj=JSON.parse(jsontext);
*/



//JSON.stringify() converts a object into a json-format-string

/* 
const jsontext={name:"Ram"};
const jsonj=JSON.stringify(jsontext);
console.log(jsonj);
*/

/* //response.json() --> it returns a promise .Once it is resolved then parsed json present.
                    and then further response body cannot be consumed which is returned by fetch api
                    in fetch api call it always return a promise.once promise is 
                    resolved then response object is returned and in this response object
                    in body field a steam is present can consume/read only once.  */
//if need to consume many times then clone response.clone()

/* fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    const   cloneres=res.clone();
    return res.json()
})
.then((data)=>{console.log(data)}); */

