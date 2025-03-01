//constructor functions are used to create objects dynamically.
//They use the new keyword to create instances.

/* 
Person is a constructor function.
p1 is an instance of Person.
When an object is created with help of constructor function.It is called as instance is created
of that constructor function.
*/


/* 
function Person(name){
    this.name=name;
}
const p1=new Person("Hithesh");
console.log(p1); 
*/


/*
Array/Promise are built in objects and constructor functions.It means they are both.
Built in objects means predefined objects that are available globally.
Constructor Functions means functions used to create instances of objects with new keyword.  
These are predefined objects provided by javascript.
They have properties and methods that can be used directly.
Examples :
*/


/* 
console.log(JSON.stringify({name : "Hithesh"}));
console.log(Date.now());
console.log(Math.PI);
*/
//Are built in objects like Array and Promise also constructor functions.
//Yes 
 
const arr1=[];//array created by array literals.
const arr2=new Array(2); //array created with new keyword.It creates empty slots.
console.log(arr2);
console.log(arr1 instanceof Array);
console.log(arr2 instanceof Array);
//both will invoke the array constructor function directly or indirectly.