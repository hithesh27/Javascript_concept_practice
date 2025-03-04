//
/* Concept
whenever u create a js object javascript engine will attach methods and properties automatically to 
that object.This is not the scenario only with objects.But also with function.Even fn has access to lot 
of properties and methods like call,apply,bind...
/* 
  concept - 1 -- Two terms i) .__proto__  ii).prototype 
*/

/* 
1 .__proto__ is used for instances of constructor fn/object.
2 .prototype is used for constructor fn.
*/

/* 
  concept - 2.1 -- How .prototype works in depth and how it is attached to Constructor fn and how it is attached to instance of 
                 constructor fn?
*/
/* 
  concept - 2.2 -- How .__proto__ works in depth and how it is access and modifying it leads to ? in case of in built-constructor
                 fn and in case of manually developed constructor fn? 
*/

//Basics-- About Object -- How referencing changes??
/* 
let obj1 = {
  name : "Hithesh",
  address : {
    street : "Adoni",
    district : "Kurnool"
  } 
}
let obj2 =obj1; 
obj1.age ="21";
obj1={
  sex: "male"
}
*/
/*
obj1 originally pointed to the first object in the heap.
obj2 = obj1; made obj2 point to the same object.
obj1 = { sex: "male" }; creates a new object and makes obj1 point to it.
obj1 = NULL; object will get automatically garbage collected.
However, obj2 still references the old object.
*/
/* 
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  return `Hello, I am ${this.name}`;
};
let p1 = new Person("Alice"); 
Person.prototype.sayBye = function () {
  return `Goodbye from ${this.name}`;
};
let p2 = new Person("Bob"); 
console.log(p1.greet());  
console.log(p1.sayBye()); 
console.log(p2.greet()); 
console.log(p2.sayBye()); 
 */
/* 
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  return `Hello, I am ${this.name}`;
};

let p1 = new Person("Alice"); 
Person.prototype = {
  greet: function () {
    return `Hi, I am ${this.name}!`;
  },
  sayBye: function () {
    return `Goodbye from ${this.name}`;
  }
};
let p2 = new Person("Bob"); 
console.log(p1.greet()); 
console.log(p2.greet()); 
console.log(p2.sayBye());
console.log(p1.sayBye());
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

  Let us see what is arr.__proto__??
    1.arr.__proto__ is an object which contains many properties and functions.
    2.
    3.__proto__ is an object that means __proto__ also has prototype for it
    4.Even arr.__proto__ has its own prototype.
    5.So,now arr.__proto__.__proto__ it says protoype of an array is an object.
      Every object again has prototype.
    6.arr.__proto__.__proto__ == obj.prototype/Object.__prototype__
  
  1. everything in js execpt primtive values (like number,string,bool,undefined) all are having the .__proto__ 
     a hidden property found in every object.
  2. .__proto__ references to prototype of constructor fn.
  3. understanding in more detail how .__proto__ changing it works further:
     .__proto__ is a accessor property meaning it has getter/setter property.
  4. Object.prototype exists in the heap as a shared object.
     Each instance of an constructor fn also has a reference in the heap.
     By default, an object’s __proto__ references Object.prototype (unless explicitly changed).
     Modifying the __proto__ of an instance changes only that instance’s prototype reference,
     meaning the instance will now inherit from a different prototype.
     This modification does NOT change Object.prototype itself or affect other instances that
     still reference Object.prototype.
*/

/* 
  concept - 3 -- what is prototypal inheritance ?

*/

/* 
  concept - 4 -- what is typeof Object  or  etc ......
*/

function display(){
  this.id="Hello";
}
const obj1=new display();
console.log(typeof display.__proto__);
/* 
  concept - 5 -- Everything in js is an object including functions.Explaination with prototypal inheritance.
    Reason :
*/




//Additional NOtes
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
/*
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
 */

/* function Person(name) {
  this.name = name;
}

// Original prototype method
Person.prototype.greet = function () {
  return `Hello, I am satish`;
};

let p1 = new Person("Alice"); // Instance created BEFORE prototype modification

// COMPLETELY REPLACING Person.prototype
Person.prototype = {
  greet: function () {
    return `Hi, I am ${this.name}!`;
  },
  sayBye: function () {
    return `Goodbye from ${this.name}`;
  }
};

let p2 = new Person("Bob"); // Instance created AFTER prototype modification
console.log(p1.greet());
console.log(p2.greet());
console.log(Person.prototype === p1.__proto__);
console.log(Person.prototype === p2.__proto__);
 */
/* const obj={
  name :"Hithesh"
}
console.log(typeof Object);
console.log(typeof obj);
console.log(typeof obj.__proto__);
 */