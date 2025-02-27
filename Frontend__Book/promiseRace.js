/* 
Defn:
Promise.race(iterable) method returns a promise and it is settled as soon as any of the promise 
is resolved with a value or rejected with a reason. 

*/

/* 
Why Promise.race()??

1.API Timeout Handling (Fastest Wins)
When making a network request, you want 
the response quickly, but if the API is too slow, you need a timeout fallback.
Code :
const fetchData=fetch('url');
const timeoitHandling=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('Time out');
        },5000);
    })
Promise.race([fetchData,timeoutHandling])
.then((val)=>resolve(val))
.catch((err)=>reject(err));

2.If you have multiple sources for an asset (e.g., images, videos, or scripts),
Promise.race() lets you use the fastest source.
const loadFromCDN1 = fetch("https://cdn1.com/script.js");
const loadFromCDN2 = fetch("https://cdn2.com/script.js");

Promise.race([loadFromCDN1, loadFromCDN2])
  .then(response => console.log("Loaded from fastest CDN:", response.url))
  .catch(error => console.log("Both CDNs failed"));
*/


// Promise.race() polyfill:

/* const p1=(timer)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          if(timer==5000) reject("5000 rejected");
          resolve(`${timer}`);
          },timer);
    })
  }

const promiserace=(promisearray)=>{
  return new Promise((resolve,reject)=>{
    promisearray.forEach((pr,ind,arr)=>{
        Promise.resolve(pr)
        .then((val)=>resolve(val))
        .catch((err)=>reject(err))
    })
  })
}

promiserace([p1(7000),p1(5000),p1(9000)]).then((val)=>console.log(val))
.catch((err)=>console.log(err)); */