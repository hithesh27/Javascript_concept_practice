/* 
Implicit : happens automatically without direct declaration.
Explicit : means it has done intentionally with proper declaration.

*/

/* 
    console.log({}==={}) //false
    obj1=obj2;
    console.log(obj1===obj2) //true
    as both have different memory location.

*/

// 'use strict'; 
//should use strict mode in top to apply globally.But not in the middle.
//but can still apply inside the functions at top.
/* 
what is strict mode vs not a strict mode?
1.To avoid accidental global variables like 
        x=10;
        which is not a good practice.strict mode can detect it.
2.Ensures this is undefined in functions when invoked normally in strict mode.
3.In non-strict mode js allows to have duplicate parameters leads to unintended behaviour.
  But in case of strict mode it doesnot allow.     
    ex: 
    function sum(a,a){
    console.log(a+a);
    }
    sum(2+3);//6
*/
/* 
what x=10 about where its scope in strict mode vs non-strict mode?
strict mode     : It does not allow to do this.Gives reference error.
Non-strict mode : first it check whether variable exists in its lexical chaining and then further it adds the variable in 
                  globalthis in node.js environment and in window in case of browser.
                  Implicitly creates a global property for that variable.
                  
*/

//only scopes in js : block,function scoped , global scope.
/* 
    Function and this Keyword.
    --> Js is using functional programming at the core.
        functions are first class citizens in js.It means u can pass a function as an argument.                             
        Returned from other functions.
    --> This enables functional programming concepts.
        1.Declarative programming: knowing what to do but not how to do.
        2.Immutability : data is not changed directly.instead a new copy is created.
        3.Pure Functions: Always give the same output for a given input.It means u should not change 
        the global variables or change external states or mutate data.
        4.Higher Order Functions : Functions that take other functions as arguments or return them 
        (map,filter,reduce).
        returning them means 
        A function can return another function which is a key property in higher order functions.

        */


//    Example :

/*     function double(x){
    return function multiply(a){
    return x*a;
    }
    }
    const multiplysecond=double(2);
    console.log(multiplysecond(3)); */

    /* 
    Understanding this concept is very difficult.Because value of this is decided in executin time 
    unlike other programming languages.
    Four different ways to invoke a function:
    1.Normal function:
    2.As a method:
    3.As a constructor:
    4.Indirectly using call,apply,bind:
    */

    //method 1:Normal function:
        /* function display(){
            console.log("Hello world");
        }
        display(); */


    //method 2:As a method:
/*         const obj={
            display : function(){
                console.log(this.name);
            },
            name : "Hithesh"
        };
        obj.display(); */

    //method 3:Using a constructor:
    //constructor is a special function,which is invoked for creating and initializing new objects and
    //it sets this keyword to that object and returns that object.
    //Always constructor is called along with new keyword.
    
       /*  const number = new Number("10");
        console.log(number.valueOf()); */
   
    /* 
        Difference betweeen primitive values and non-primitive values:
        Primitive Values: Immutable,stored directly in memory like number,string,boolean ,bigint.
        Non-primitive(Object)Values: Stored a references can have properties and methods.
        let c=10;
        c=20 ; 10 is in some location and 20 is in another location.only c points to another location in memory.
   */

    //Method 4:Using call,apply,bind:
    /* 
        function display(arg1,arg2){
            console.log(arg1,arg2);
        }
        display.call(undefined,2,3);
    */
    
/* 
1.Every function has a this keyword.
2.Each invocation has its own context and the context decides value of this.
3.Strict mode affects the behaviour of this Keyword. 
*/
/* 
const obj={
    name: "Hithesh",
    class: "Btech"
};
obj["place"]="raiydurg";
console.log(obj);
 */

//1.where this refers to when a function is invoked normally.
/* 
1.This points to window in browser and global object in case of node.js
Example1:
*/

/* function example(){
    console.log(this===globalThis);
}
example(); */
//Example2:
/* 
     function changeGlobal(){
        this.names="HIthesh";
        this.displayName=function(){
        console.log("Hello world");
        };
    }
    
changeGlobal();
console.log(names); 
console.log(this.displayName);
 */


//2.method:
//if u invoke the normal function with strict mode the value of this will be undefined.
//It also effects all the inner function which are declared inside a fn in strict mode.

/* 
function example(){
    console.log(this===undefined);
}
console.log(example);
*/

/* 
function example1(){
    console.log(this===undefined);
    function example2(){
        console.log(this===undefined);
    }
    example2();
}
example1();
*/


//3.method :
/* 
It is all about IIFE:
Immediately invoked function expression.It is IIFE.When we invoke the function immediately then it
is similar to invoking a function similar to normal function.
Based on the mode ,this refers to undefined or window.
Function Declaration      vs     function Expression ==>
1.  hoisted properly            1. not hoisted
2.  they cannot be anonymous    2. They can be anonymous
3.  used for reusable functions 3. used for callback fn , iife ,dynamic function assignment
*/

/* 
//in strict mode ==> 'use strict';
(function display(){
    console.log(this===undefined);
})();

//in non-strict mode
(function display2(){
    console.log(this===globalThis);
})();
//we wrap our function to force js to treat as a function expression.
*/

//4.method :
//value of this when invoked as a method.
/* 
4.1 when a method is declared inside an object.This keyword points to that object when it is invoked
    with the help of that object.
    -->context will be created at the time of execution.So this will point to updated object.
i)   invoked a function with help of object then this points to object.
ii)  invoke a function normally then depends on the mode whether it is strict or not strict.
iii) Now let us see what happens when we pass a method to a setTimeout/setInterval and what will this
     refer is as a normal function based on strict mode/non-strict mode.
iv)  If their are any inner functions inside a method and it is invoked then this will refer to based on
     how it is invoked.
v)   About fat arrow functions:
     fat arrow functions will not have a this keyword.
     It takes this from its nearest ancestor.
vi)  Node.js environment
            this --> global -->nonstrict --> {};
            this --> global -->nonstrict --> {};
            this --> normal fn invocation --> nonstrict --> thisGlobal;
            this --> normal fn invocation --> strict    --> undefined;
           Browser Environment
    this --> global --> nonstrict  --> window;  
    this --> global --> strict     --> undefined;  
    this --> normal fn invocation --> nonstrict  --> window;  
    this --> normal fn invocation --> strict     --> undefined;  
vii)  using call method if u invoke then it can change this for normal function invoke to this mentioned in call method.
viii) Value of this when invoked indirectly:
      Run time binding -- call,apply
      permanent binding-- bind
  ix)  
    Ex(V):
    const obj={
        name:"Ramaswamy",
        place:"kollampet",
        display: function(){
            const inner=()=>{
                console.log(this);
                console.log(this.name);
            }
            inner();
        }
    }
    obj.display();
    Ex:
    const obj={
        name : "Hithesh",
        age :24,
        display : function(){
            console.log(this);
            console.log(this===obj);        
        }
    }
    const displayFn=obj.display;
    displayFn();
 */

 /*     const obj={
        name:"Ramaswamy",
        place:"kollampet",
        display:()=>{
            console.log(this);
            const inner=()=>{
                console.log(this);
                console.log(this.name);
            }
            inner();
        }
    }
    obj.display(); */


    
    
    // function display(){
    //     console.log(this);
    // }
    // display();
   
    // console.log(this);

    /*     NOde.js environment
            this --> global -->nonstrict --> {};
            this --> global -->nonstrict --> {};
            this --> normal fn invocation --> nonstrict --> thisGlobal;
            this --> normal fn invocation --> strict    --> undefined;
           Browser Environment
            Window environment  
    this --> global --> nonstrict  --> window;  
    this --> global --> strict     --> undefined;  
    this --> normal fn invocation --> nonstrict  --> window;  
    this --> normal fn invocation --> strict     --> undefined;  

    
    */

/* 
    Last concept in This keyword.About constructor:-->
    0.Difference between instance and object 
        i)instance is object which is created with help of class or constructor fn.
        ii)All instances are object.But all objects are not instances.
    1.Constructor fn will act as a blue print for creating a object.
    2.Instance means a unique object created by constructor function.
    3.When we invoke a function as a constructor it means we used new keyword.
    ==>exampleLast<==
    4.Their are some methods in javascript where an instance will be created even without using new keyword/class.
    5.Sometimes we can add a check to the constructor function which we wanted to invoke with constructor only. 
    ==>exmaple5<==

*/

//Example Last:
/* 
function exmaple(name){
    // this["name"]=name;
    this.fullname=name;
}
const obj=new exmaple("Hithesh");
console.log(obj);
*/

//Example5:
/* 
    function example(name){
        if(!(this instanceof example)){
            console.log("not invoked with new keyword");
            throw Error('can be invoked as a constructor only');
        }
        this.name="Hithesh";
    }
    const obj=example("Ram");
    //const obj= new example("Ram");
    console.log(obj);

 */