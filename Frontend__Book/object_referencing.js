/* 
For primitive values,variables store values itself like numbers,string,null,undefined,booleans.
so for primitive values comparison work as expected.
For non-primitive values we store functions,objects,arrays as references not actual values.
So even if two objects has same content their references are different,making obj1== obj2 as false for same
property and value. 
*/

/*
let c = {
    greeting : "Hey!"
};
let d;
d=c;
c.greeting="Hello!";
console.log(d);
*/

/* 
console.log({1,2}=={1,2});
*/

//We know the concept now just go through this link :
//Link:https://www.youtube.com/watch?v=XnFIX3c7xoI&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=7&t=1188s
//Some points to be noted

/* 
const obj={name : "Hithesh"}
let arr=[obj];//It means I am storing arr[0]=obj
*/

/* const obj={
    name :"Hithesh",
    address : {
        pinCode: "518301",
        street: "Adoni"
    }
}
const display = (obj2={...obj}) => {
    obj2.address.pinCode="108";
    obj2.name="ram";
}
display(); //shallow copy happens
console.log(obj);
display(obj); //reference is passed now. */

