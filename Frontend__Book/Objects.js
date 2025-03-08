/* 
Everything in js is an object.Object is a collection of properties and properties is assocaition with 
key and value.Propertys value can be a function in that case property is known as method. 
*/

// How to delete any property : 
/* const obj={
    name : "Hithesh",
    age : 21
}
delete obj.age;
console.log(obj);
 */

//Question on delete keyword:
//delete keyword is only used when we want to delete properties from an object but not local variable.
/* const func=function (a){
    delete a;
    return a;
}(5)
console.log(func); */

//How to add property with spaces ""
//use [] brackets to access keys,its other way:
/* const user ={
    name: "Hithesh",
    "Like this video":true
}
console.log(user["name"]);
//All keys in object are strings.
delete user["name"]; */

//How to add dynamic key value pairs to an object dynamically :
//Need to use square brackets for adding dynamic keys.
/*  
    const property="FirstName";
    const name= "Piyush";
    const object={
        [property] : name
    }
    console.log(object);
 */

//Loop through each of it keys and print the value : for in loop 
/* const obj={
    name : "Hithesh",
    age : 21
}
for(key in obj){
    console.log(key,obj[key],typeof key);
}
*/
//Note :always key will be a string .Its very impt.

//------------------------->    Questions     <--------------------
