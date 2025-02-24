/* //About forEach

const obj={
    name: "Hithesh",
    class: "Btech"
};
const arr=[1,2,3];
arr.forEach((currentValue,index,arr)=>{
    console.log(currentValue,this.class);
},obj);

// in case of arrow functions it doesnot have its own this .it always takes this keyword 
// from surrounding lexical scope.

arr.forEach(function(currentValue,index,arr){
    console.log(currentValue,this.class);
},obj); 

*/

/* Promise.all() polyfill explaination :

Lets first understand what is promise.all() polyfill
It takes an array of promises.
returns a promise that resolves when all the promises in the array are fulfilled or
when the iterable contains no promises.
It rejects with the reason of the first promise that rejects.

How to tackle a problem ???

convert the bigger problem into smaller problems.
It means 1.need to return a promise.
         2.all the promises are resolved then return resolved values in array form one after the other.
         3.If any of the promise is rejected then return its corresponding rejected message.

*/
//all lines inside the promise constructor function runs
//irrespective of whether it is resolved or rejected. 

/*
const fetchTimer=(timer)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(timer !== 3000)
            resolve(`timer--> ${timer}`);
            else reject(`timer--> ${timer}`);
        },timer);
    });
}
const promiseAll=(pr)=>{
    let arrpromise=[];
    let resolvedPr=0;
    return new Promise((resolve,reject)=>{
        pr.forEach((eachpr,ind,pr)=>{
            eachpr.then((val)=>{
                arrpromise[ind]=val;
                ++resolvedPr;
                if(resolvedPr===pr.length){
                    resolve(arrpromise);
                }  
            })
            .catch((err)=>{
                reject(err);
            })
        })
    });
}
const arrayofpromises=[fetchTimer(10000),fetchTimer(3000),fetchTimer(6000),fetchTimer(1000)];
promiseAll(arrayofpromises)
.then((val)=>{
    console.log(val);
})
.catch((err)=>{
    console.log(err);
}) 
*/



/* const test1=new Promise((resolve,reject)=>{
   setTimeout(resolve,5000,'test1');
});
test1.then((val)=>console.log(val));  */

/* 
Promise.any([iterable]).then(callbackfnSuccess,callbackFailure);
if any of the promise[p1,p2,p3] got resolved then it will return its resolved value immediately.
if all the promise got rejected then it will gives the aggregate error .it is an array of promises.
error instanceof AggregateError → ✅ true
error.errors → An array of all rejection reasons.

*/


/* 
Promise.race([iterable]).then(callbackfnSuccess,fnfailure);
whichever gets resolved first or rejected first will return 
*/

