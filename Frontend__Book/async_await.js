/* 
    Async Await:
    Async is a keyword which is used before a function.To create a async function.
    Async function always returns a promise.
    either u return a promise or 
    if u return a value then async fn will take the value and wrap it inside a promise
    and then return it.  
*/
//syntax1-Async:
/* 
async function getData(){
    return "Hithesh";
}
getData().then((val)=>{
    console.log(val);
});
 */

//syntax2-Async:
/* 
const pr=function(){
    return new Promise((resolve,reject)=>{
        resolve("resolved value");
        });
}
async function getData(){
    return pr;
}
pr().then((val)=>{
    console.log(val);
});
 */


/* 
Async await combo is used to handle promises: 
await to be used infront of promsie
and once the data get resolved the resolved value will come into data1.
await is a keyword can only be used inside a async function.
*/

/* 
    const pr=new Promise((resolve,reject)=>{
        resolve("resolved value");
        });
    const pr2=async ()=>{
        const data=await pr;
        console.log(data);
    }
    pr2();
 */

//Handling promises normally vs handling promises using async_await:

//older way of handling promises
/* const pr=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("resolved value");
    },10000);
    });
const pr2=()=>{
    pr.then((val)=>console.log(val));
    console.log("namaste js");
}
pr2(); */
//output : namaste js , resolved value (ater 10sec)
//reason :
/* 
Time,tide,js waits for none.
As soon as pr2 fn is invoked getData will register promise and take the callbackFn and keep it
seperatly till it is resolved and js will continue executing other lines.Js engine will not wait
for promise to be resolved and it will move on to next line.This is older way of handling promise.  
*/


//newer way
/* const pr=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("resolved value");
    },10000);
    });
const pr2=async ()=>{
    console.log("Hello world");
    const data=await pr;
    console.log("Namaste js");
    console.log(data);
}
pr2(); */

// output: Hello world(quickly),Namste js(after 10sec), resolved value(after 10sec)
//Reason:
/* 
 Basically js engine is waiting for the promise to be resolved when we use async await and once
 promise is resolved then it goes to next line.
*/

/* const pr=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("resolved value");
    },10000);
    });
const pr2=async ()=>{
    console.log("Hello world");
    const data=await pr;
    console.log("Namaste js1");
    console.log(data);
    const data2=await pr;
    console.log("Namaste js2");
    console.log(data2);
}
pr2(); */

//output : hello worlds(quickly),and then 
//         after 10seconds
//         Namaste js1,resolved,namaste js2,resolved
//reason :



/* const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("resolved value");
    },10000);
    });
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("resolved value2");
    },5000);
    });
const pr2=async ()=>{
    console.log("Hello world");
    const data=await p1;
    console.log("Namaste js1");
    console.log(data);
    const data2=await p2;
    console.log("Namaste js2");
    console.log(data2);
}
pr2(); */

//output : (after 10sec) all are printed.
//Reason :


/* const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("resolved value");
    },5000);
    });
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("resolved value2");
    },10000);
    });
const pr2=async ()=>{
    console.log("Hello world");
    const data=await p1;
    console.log("Namaste js1");
    console.log(data);
    const data2=await p2;
    console.log("Namaste js2");
    console.log(data2);
}
pr2();  */

//output : Hello world ,
//         (after 5sec )js1,resolved1 
//         (after 10sec)js2,resolved2
//Reason :


//(Combined Reason for all the above three codes)
/* 
Js engine will not wait for anything to get resolved.
Js appears to be awaiting here.
pr2 fn is not in the call stack when it is waiting over here.if suppose it happened 
our page would have been freezed.
already async p1,p2 promises are registered.
suspends handlepromise execution as promise need to be resolved .it means handlePromise is popped out 
from call stack.so any other events can execute in callstack.
await will suspend.But once resolved again handlePromise pushped into callStack.
When the promise resolves, its handler (.then() or await) will not run immediately.
It gets pushed to the microtask queue, which executes only after the call stack is empty.
*/

//Real world Examples:
/* 
Making an api call using fetch function.It is a function given by browser but not by js.
Lets make an api call to github which is free api.
This api is used to fetch information about particular user
https://api.github.com/users/hithesh27
*/
//fetch function is used to make api call and it always returns promise.
//once promise is resolved.resolved value is response object.
//In this response object their is a property body ,which has a readable stream.
//to convert readable stream to js object then do resp.json().
//resp.json() is again a promise.
//once promise is resolved it gives json value.

/* const API_URL="https:/invalid/url";
async function displayData(){
    try{
    const resp=await fetch(API_URL);
    const data=await resp.json();
    console.log(data);
    }
    catch(err){
        console.log(err);
        //redirect to request failed or 404 page ,show popup that request is failed. 
        //failed to fetch type error
    }
}
displayData(); */

//error__handling:
//to handle errors.use try/catch block.wrap it async operations in try block.

//handlePromise().catch((err)=>console.log(err));