/* 
Saying an object is duplicated does not confirm whether it is shallow or deep copy.
*/

/* 
    const person={
        name : "Hithesh",
        address :{
            street : "Srinagar colony",
            pincode : 518301
        }
    }
    person is the top level object.address is nested object.
*/

//Shallow copy :
/* 
It is  only the top level object is new.I mean reference is new for whole objects.
That means  proties are copied but nested elements are referenced.
NOte : spread operator always create a shallow copy.
*/

//deep copy :
/* 
Everything is copied even the nested elements.
*/