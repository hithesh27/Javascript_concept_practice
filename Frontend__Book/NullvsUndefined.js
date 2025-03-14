/* Null and undefined comparison:
null and undefined are falsy values and both are used to represent "no value".But they are used in different
situations and have distinctive behaviour.


*/
//undefined:
/*
Undefined means a variable which has been declared and no value is assigned to it.
It represents a missing or uninitialized value.
It is automatically assigned by javascript. 
*/
/*
//An uninitialized variable.
let x;
console.log(x);
//x is declared but not assigned,so JS assigns undefined.
*/
/* 
//no argument is passed
function display(name){
    console.log(name);
} 
display();
*/
/* 
//Accessing a non-existent property:
const person={
    name : "Alice"
}
console.log(person.age);
//Age doesnot exist so accessing it returns undefined. 
*/


//NULL:

/* 
Null is an explicit assignment by developer to indicate "no value" or empty.
It is used when a variable should have no value but is not undefined.
JS doesnot assign null to anything 
*/
/* Explicitly setting a variable null:
let user=null;
console.log(user);
*/
/* Resetting a variable 
let obj={
    name : "Bob"
}
obj=null;//object is cleared.
console.log(obj);
obj previously stored an object but now it holds null to indicate no object.
*/

/* Differences between undefined vs null
1.type         ------->undefined    object
*/
//Note : Numeric conversion of undefined is NaN and numeric conversion of null is 0. 
//Note : If u want to indicate a variable intensionally has no value then use null instead of undefined.
//       undefined will generally be assigned by js.

/* 
console.log(null==undefined);
null and undefined both has no value.
*/

/* 
console.log(null===undefined);
//null and undefined both types are different not the same.
*/


/*
console.log(null+1); // 1  null is treated as 0.
console.log(undefined+1); //NaN undefined is treated as NaN.
*/


/* 
Q1:What is the difference between null and undefined?
Answer :null is an intentional absence of value, while undefined
means a variable exists but has not been assigned a value.
*/