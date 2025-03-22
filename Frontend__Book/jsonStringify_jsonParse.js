
/* console.log(JSON.stringify({
    name : "Hithesh",
    age  : 21
},["age"]));
 */
/* const obj={
    name : "Hithesh",
    age  : 21
}
localStorage.setItem("key",JSON.stringify(obj));
console.log(JSON.parse(localStorage.getItem("key")));
 */
/* 
in inspect ,in application ,we go to localStorage 
their we always store key as a string and value also as a string.
So here conversion of js object to a json string is very important and helful.
otherwise "[Object Object]" is stored in local storage.which is not good.
THis is the application or usage of JSON.stringify and JSON.parse.
*/
/* 
To see complete working.First need to create a html file and then connect u r script file.
then run on browser.If u do node filename u will get reference error as localStorage is a webAPI 
provided by browser but not node.js environment
*/