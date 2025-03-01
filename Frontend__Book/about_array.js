//5 different ways to create an array.

//1.using array literal
/* 
let arr1=[1,2,3,4,5];
console.log(arr1); //[1,2,3,4,5]
*/

//2.using new array constructor
/* 
let arr2=new Array(1,2,3,4,5);
console.log(arr2); //[1,2,3,4,5]
*/

/* 
let arr3= new Array(5);
*/
/* 
memory is allocated and reserved but memory slots are not initialized.It means slots are empty.
Javascript doesnot assign any values(undefined or anything else).
Methods like .map(),.forEach(),.filter() do not work on empty slots because JS skips them 
as they are not initialized.
Methods like .fill(),.join(),.from() will work and can help initialize these slots properly.
*/
//lets understand How can we initialize these slots properly.
/* 
//i)
let arr31=new Array(5).fill(2); //now fill with 2 value in all the empty slots.
let arr32=new Array(5).fill(); //now fill does ntg same empty slots.
let arr32=new Array(5).fill(undefined);
 */
//3.
/* let arr4=Array.of(1,2,3);
let arr41=Array.of(7);
console.log(arr4,arr41);
 */

//4. .from()
//5.  using spread operator

/* 
We will learn later about it.
*/