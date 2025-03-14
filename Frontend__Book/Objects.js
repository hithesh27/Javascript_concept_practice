/* 
Everything in js is an object.Object is a collection of properties and properties is assocaition with 
key and value.Propertys value can be a function in that case property is known as method. 
*/

//Ways to define a method inside an object:
/* 
const obj={
    name : "Hithesh",
    display : function (){
        console.log(this.name);
    }
}
*/
//It behaves as a normal function.Below is an ES6 Method.Normal function have their own this keyword.
//But arrow function doesnot have their own this keyword.
/* const obj={
    name : "Hithesh",
    display() {
        console.log(this.name);
    }
}
console.log(obj);
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
//Question:1

/*     const obj={
        a: "1",
        b: "2",
        a: "3"
    };
    console.log(obj); */

//Question:2
/* 
let obj = {
    num1:100,
    num2:200,
    display:function(){
        return "Hello world"
    } 
}
function multiplyNumericTwo(object){
    for(key in object){
        if(typeof object[key]==="number"){
            object[key]*=2;
        }
    }
}
multiplyNumericTwo(obj);
console.log(obj); */

//Question:3
/* Concept
let obj={
    name : "ram"
}
console.log(obj.toString()); //SO this will be a new key for following up code "[Object Object]"
*/


/* const obj1={
    name : "Hithesh",
    class: "Btech"
}
const obj2={
    id : 123
}
const obj3={
    id : 456
}
obj1[obj2]=1000;
obj1[obj3]=10000;
obj1["nam"]="nam"
console.log(obj1); */

/* Note : about keys in objects.Keys should be strings.If they are not strings then javascript will change
do obj1.toString() like fn to convert to string.But if it is variable and variable is not defined 
then error can be seen. */