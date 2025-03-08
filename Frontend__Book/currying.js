/* 
    Currying --> 
    Currying in javascript is a concept of functional programming
    in which we can pass functions as arguments and return functions
    without anyside effects.(Changes to program states in globally).
*/

/* 
    What is functional programming in JS ??
    Functional programming treats functions as first class citizens.
    like callback fn ,higher order fns(like .map ,.reduce ,.forEach) etc...
*/

/* What is Pure Functions in JavaScript ??
    --> For a given input we will always get the same output. 
    function sum(a,b){
        return a+b;
    }
    sum(2,3);
    let total=0;
    function addone(a){
        total+=a;
        return total;
    }
    addone(2);
    addone(2);
    for same input we are getting different output.
*/

/* 
    In currying we return a function for each function invoked which accepts next argument inline.
    with help of currying we can transform a function with multiple arguments into a sequence of nested functions.
    Example :
    sum(1)(2)(3);
    sum(1,2,3);
Their is no specified limit how many times u return a function.
Also their are different variations in currying and number of arguments can also increase or decrease accordingly.
variations:
sum(1)(2)(3);
sum(1,2)(3);
sum(1)(2,3);
sum(1,2,3);
*/

/* 
For each function we return a function and then how we return value from it.For that we need to decide a base condition that
should return output.
Types of base case that can exist :
1.If no argument is passed in the next function call then return the value.
2.If we have reached 5 arguments then return the value
*/

//Problem Statement - Implement currying function for 4 arguments.If we have reached the limit return the value.


/* 
Thought process.
1.Need to able to count number of arguments passed in a function.
2.possibilities :sum(1,2,3)(4) ,sum(1,2,3,4) , sum(1,2)(3)(4)
*/

/* 


*/