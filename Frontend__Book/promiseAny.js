//Defn :
/*
✅Resolves when any promise in the array succeeds.
❌Rejects only if all promises fail, returning an AggregateError
*/

//why Promise.any() is needed ??
/* 
1.Fastest API Response (Multiple Servers) :
If you're calling multiple backup servers, you can take the fastest successful response
Real world examples for Promise.any()??
What Does "Multiple Backup Servers" Mean?
Multiple backup servers mean that you have multiple servers providing the same data,
so if one fails or is slow, you can get the response from another.

Why Use Multiple Servers?
✅ Faster Response Time → The closest and fastest server responds first.
✅ Redundancy (Backup Plan) → If one server fails, another server can provide the data.
✅ Load Balancing → Traffic is distributed across multiple servers to prevent overload.

2.
Multiple Image CDNs (Pick the First Available One)
If you're loading an image from multiple CDNs, Promise.any() picks the first working link.
CDN (Content Delivery Network) is a network of distributed servers that store and deliver
content (like images, videos, and files) from the nearest or fastest server to the user.

*/

//what is aggregate errors ??

/* 
Aggregate error which is a collection of all errors from all the rejected promises.
Aggregate error is an object and error.errors is an array that contains all the individual
errors from the rejected promises.
const error = {
    name: "AggregateError",
    message: "All promises were rejected",
    errors: [Error1, Error2, Error3]  // Array of individual errors
}
*/

/* 
Note :
This is an implicit property of Promises in JavaScript. 
When a Promise resolves with another Promise (i.e., a nested Promise), the outer Promise automatically 
adopts the inner Promise’s state—whether it resolves or rejects.
Example-1:
function innerPromise() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Inner Resolved"), 2000);
  });
}

// Outer Promise resolves with innerPromise
let outerPromise = new Promise((resolve) => {
  resolve(innerPromise()); // JS automatically adopts inner Promise state
});

outerPromise.then(console.log); 
// ✅ Logs: "Inner Resolved" (after 2s)

Example-2:
function fetchUserData() {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
    res.json()
  );
}

let userPromise = Promise.resolve(fetchUserData()); // Resolving with a Promise

userPromise.then((user) => {
  console.log(user.name); // ✅ Works fine! No extra `.then()` needed.
});

*/
//Promise.any() polyfill:

const p1=(timer)=>{
    return new Promise((resolve,reject)=>{
        console.log(timer);
      setTimeout(()=>{
          reject(`${timer} rejected`);
         // reject(`${timer}`);
          //resolve(`${timer}`);
          },timer);
    })
}

const promiseAll=(promiseArray)=>{
    let errorArray=new Array(promiseArray.length);
    let count=0;
 return new Promise((resolve,reject)=>{
    promiseArray.forEach((promise,ind,arr)=>{
        Promise.resolve(promise)
        .then((val)=>{
            resolve(val);
        })
        .catch((err)=>{
            count++;
            errorArray[ind]=err;
            if(count==promiseArray.length){
                reject(errorArray);
            }
        })
    })
});
}

const promiseArray=[p1(1000),p1(5000),p1(3000)];
promiseAll(promiseArray)
.then((val)=>console.log(val))
.catch((err)=>console.log(err));