/*
    Stack Memory vs Heap Memory in JavaScript:
    Js uses two kinds of memory to store data
    1.Stack Memory (for primitives and function execution)
    2.Heap Memory (for objects,array,functions)
    Each memory type works differently.
    Especially when copying values or passing data between variables.
*/


/* 
                   Stack Memory(Primitives)                        Heap Memory(Objects,array,function)
1.Direct values                              1.Actual Object with refence in stack.
2.Each variable gets its own memory location 2.Variable stores a reference(memory address) pointing to heap.
3.Copying Behaviour -copies actual value     3.copies only the reference but not the actual object.
4.speed -faster access                       4.slower -indirect access through reference.
5.LifeTime-Autocleared when fn execution ends5.Stays in memory until manually removed or garbage collected.
But JavaScript has automatic garbage collection
*/

//Stack Memory (Used for Primitives):

/* 
let x=10;
x=20;
creates a new memory slot for x from 10 to 20.
*/

/* 
1.Each variable gets its own memory space.
2.Primitives(Number,String,Boolean,null,undefined,symbol) are stored directly in the stack.
let a=10;
let b=a; //copying the value,not referencing the same memory location.
Memory Representation :
Stack Memory
-----------------
| a = 10       |
| b = 20       |
-----------------
*/ 

//Heap Memory (Used for objects,arrays,functions):

/* 
1.Objects,arrays,functions are stored in heap.
2.The variable in stack stores only reference(memory address) pointing to the stack.
3.Multiple varibles can point to the same object(shared reference). 
Stack Memory
-------------------------
| obj1 | ref -> 0x001  |
| obj2 | ref -> 0x001  |
-------------------------
Heap Memory
---------------------------------
| 0x001 -> { name: "Ram" }      |
---------------------------------
*/

/* 
  const obj={
    name : "Ram",
  }
  const obj2=obj;
  obj.name="Hithesh";
  console.log(obj2.name);
*/

//say about Garbage collection in Heap and stack:
//Heap
/* 
JS has automatic garbage collection.
Unused objects in heap are automatically removed.
The garbage collector removes objects that no longer has any active references.
Memory is Freed When No References Exist
let obj = { name: "Alice" }; 
obj = null; // The object is now unreachable
{ name: "Alice" } object was stored in the heap.
Setting obj = null; removes the last reference to the object.
The garbage collector will automatically free the memory. 

When Does Memory Stay in the Heap?
If an object still has at least one reference, it stays in the heap.
If an object has no references left, it is automatically deleted by garbage collection.
let obj1 = { age: 30 };
let obj2 = obj1; // obj2 references the same object
obj1 = null; // obj2 still holds a reference, so the object stays in heap
console.log(obj2.age); // 30 (still accessible)
Even though obj1 = null;, obj2 still references the object, so it remains in memory.
*/

/* 
Note : Can We Manually Free Memory?
No direct way (like free() in C++).
You can remove references (null, undefined) and let the garbage collector handle it. 
*/

//stack
/* 
No Garbage collection is needed in case of stack memory,it works automatically and instantly.
Principle followed here is last-in-first-out.
When a function is called, its local variables are pushed onto the stack.
When the function returns (ends execution),those variables are popped off and automatically 
removed from memory.
function example(){
    let x=10; //stored in stack 
    let y=20; //stored in stack
} //removed all the two variables from the stack.
example();
*/