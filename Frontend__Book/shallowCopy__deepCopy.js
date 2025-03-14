import _ from "lodash"
/* 
Shallow copy : 
When one object holds reference to another object then it is shallow copy.
all non-primitive values will hold the references to original object.
1.Object.assign()
2.spread operator
*/

/* 
Deep copy :
when we completely clone an object into another variable then that is deep copy.
donot have any referneces to original object.
1.structuredClone()
2._.cloneDeep()
*/

//How to create a deep to an object/clone an object?
//This is shallow copy
/*
    const user ={
        name :"Hithesh",
        class:"Btech" 
    }
    const userAddress={
        pinCode : "518301"
    }
    const userId={
        id: "21MMB0A52"
    }
    const userShallowCopy=Object.assign(user,userAddress,userId);
    // or other way Object.assign({},user,userAddress,userId); 
    //If one or more properties are having same key then object will consider latest value for that key. 
    console.log(user===userShallowCopy); //in same user reference adding properties.
    console.log(user);
*/
//This is shallow copy by spread operator.
/*
const user ={
    name :"Hithesh",
    class:"Btech" 
}
const userAddress={
    pinCode : "518301"
}
const userId={
    id: "21MMB0A52"
}
const userDetails={...user,...userAddress,...userId};
user.name="Ramsay";
console.log(userDetails);
*/

//Using JSON.stringify() and JSON.parse() but their are limitations It cannot do deep copy if object 
//has methods or functions ,Date,Map,Set.
/* 
    const obj={
        name : "Hithesh",
        display : function(){
            console.log(this.name);
        }
    }
    const deepCopy = JSON.parse(JSON.stringify(obj));
    obj.name="Ram";
    console.log(deepCopy);
    console.log(deepCopy); //display proeprty is lost.
*/

/*
const obj = { date: new Date() }; //new Date() returns an date object.ON this object methods are applicable. 
const deepCopy = JSON.parse(JSON.stringify(obj));
console.log(deepCopy.date); // "2025-03-14T12:00:00.000Z" ❌ (converted to string)
console.log(new Date(deepCopy.date).getFullYear()); // 2025 ✅ (can manually convert back)
 */
/* 
const obj = {
  myMap: new Map([["key", "value"]]),
  mySet: new Set([1, 2, 3])
};
const deepCopy = JSON.parse(JSON.stringify(obj));
console.log(deepCopy.myMap); // {} ❌ (lost)
console.log(deepCopy.mySet); // {} ❌ (lost)
*/

//Reason
/* 
Inventing JSON purpose is for storage.So,it is designed accordingly>but not for this purpose.
1️⃣ Creates a new empty string ("") to store the JSON result.
2️⃣ Goes through each key-value pair inside obj to determine if it can be converted to JSON.
3️⃣ If a value is a supported data type, it adds it to the result string.
4️⃣ If a value is unsupported (functions, Map, Set, RegExp, etc.), it either ignores it or replaces it with {} or null.
5️⃣ Returns the final JSON string with only the supported values.
and properties attached to prototype are also ignored. 
*/

//structuredClone(obj):

/* 
Built in and efficient.
Handles map,set,ArrayBuffer,Date,RegExp.
Does not copy functions.
*/

/* const obj={
    name : "Hithesh",
    class : "Btech",
    date : new Date(),
};
const obj2=structuredClone(obj);
console.log(obj2); */

//using loadash
/* 
Most powerful method.
converts all properties along with methods inside objects.
syntax: 
const copyObj=_.cloneDeep(obj);
How to install loadash??
1.Donot have package.json
2.First get that file 
3.npm init -y (-y says yes for all the next questions)
    to get package.json with basic statemnets we write 3. statement
4.npm install loadash
5.import _ from "loadash"
*/

/* const obj={
    name : "HIthesh",
    display : function(){
        console.log(this.name);
    }
}
const objcopy=_.cloneDeep(obj);
console.log(objcopy); */