//
/* 
let arr=["Apple","Banana","Mango"];
let obj={
    name:"Hithesh",
    class: "Btech",
    display: function(){
        console.log(this.name+"$"+this.class);
    }
} 
*/
/* Concept
Now doubt comes is when I mention arr.   or obj.   
How can I see many properties and methods.
How is it possible ?
It is due to Prototype.
*/

//How it is having access to other properties and methods. 
// obj.toString()

/* Concept
whenever u create a js object javascript engine will attach methods and properties automatically to 
that object.This is not the scenario only with objects.But also with function.Even fn has access to lot 
of properties and methods like call,apply,bind...
Example:
*/

/* 
function print(){
    
}
 */

//print.call()

/* 
    Concept 
    Functions are also to some extent are objects.Whatever u create in js will have access to some hidden
    propeties and methods.These comes via prototype. 
*/

/*
Steps to learn what exactly is prototype:
    1.When an object is created.
    2.Js engine automatically puts these hidden properties into an object and attaches to your object.
      So an object is attached to original object and that is how u get access to those methods and 
      properties.  
    3.To get access to that hidden object.can do it by 
      arr.__proto__ this is the object __proto__ where js engine puts all of its functions and methods.
      arr.__proto__. now u can access to all methods and properties.
      If done for object similarly object.__proto__ still will be able to access prototype object. 
    4.So simply this prototype object is attached each and every method,function,array,property.
    5.About how to access ??
      can access these properties directly using dot operator --> fn.call
*/

/*Let us see what is arr.__proto__??
    1.arr.__proto__ is an object which contains many properties and functions.
    2.
    3.__proto__ is an object that means __proto__ also has prototype for it
    4.Even arr.__proto__ has its own prototype.
    5.So,now arr.__proto__.__proto__ it says protoype of an array is an object.
      Every object again has prototype.
    6.arr.__proto__.__proto__ == obj.prototype/Object.__prototype__
*/


/* 
  .prototype(Function Prototype)
  -->Available only on constructor function.(Function used with new keyword).
  -->Used to add methods or properties for all instances of a constructor.
  Ex:
*/

/*
Array/Promise are built in objects and constructor functions.It means they are both.
Built in objects means predefined objects that are available globally.
Constructor Functions means functions used to create instances of objects with new keyword.  
These are predefined objects provided by javascript.
They have properties and methods that can be used directly.
Examples :
console.log(JSON.stringify({name : "Hithesh"}));
console.log(Date.now());
console.log(Math.PI);
*/
function Person(name){
  this.name=name;
}
Person.prototype.greet=function (){
  return `Hello,I am ${this.name}`;
}

const p1= new Person("Hithesh");
const p2= new Person("Ram");
console.log(p1.greet());
console.log(p2.greet());