//spread opertor is used to expand elements of an array or properties of an object and shallow copy happens
//here

/*
const arr1=[1,2,3];
const arr2=[4,5,6];
const arr3=[...arr1,...arr2];
console.log(arr3);
*/

//how const works ?? only reference should not be changed but properties can be changed ??true.
//const only prevents the reassignment of variable but does not make the array immutabe
//reference to level object/array is fixed but its contents can still be modified.  
//const works diiferently for primitive values and non primitive values.
//For primitive its all about value and for non-primitive its all about reference.
/* 
const arr1 = [1, [2, 3], 4];
arr1.push(5);
const shallowCopy = [...arr1];
console.log(shallowCopy); 
shallowCopy[1][0] = 99; 
shallowCopy[0]=100;
console.log(arr1); 
console.log(shallowCopy);
 */

/* const obj={
    name :"ram",
    class: "10",
    school: "KITS"
}
const obj2={...obj};
console.log(obj2);
 */
/* 
const sum=(a,b,c)=>{
    console.log(a,b,c);
}
sum(...[1,2,3]);
 */

//Rest operator :collects all the multiple values into an array/object.  
/* 
const sumAll=(...args)=>{
    return args.reduce((prev,val)=>{
            prev=prev+val;
            return prev;
        },0)
}
console.log(sumAll(1,2,3,4,5));
*/
//so it puts the arguments into an array.


//Array destructuring :
/*
const  [first,second,...arr]=[1,2,3,4,5,6,7];
console.log(first,second,arr);
const [,third,fourth]=[8,9,10];
console.log(third,fourth);
*/

//Object destructuring :
/* 
const user ={
    id:"name",
    class: "10",
    address:{
        n1: "n1"
    }
};
const {id,...halfaddress} = user;
halfaddress.address.n1="n3";
console.log(halfaddress.address.n1)
console.log(user); 
 */