/* 


Js is a synchronus language.


synchronus means waits for one another .Means only it goes to next after completing execution of first.
when both of them are in sync above thing happens.


Callbacks brings the nature of Asynchronus in JavaScript.


promises are their to overcome callbackhell when dealing with asynchronus code.


                            Synchronus code                           Asynchronus code 


order of execution ---> 1.Sequential (blocking)                       1.Non-blocking (runs in background)
Performance        ---> 2.Slower for time consuming tasks             2.Faster for I/O operations like DB,Network
Examples           ---> 3.Regular Functions,Loops                     3.CallBacks,Promises,Async/wait



Promise:
Only two outcomes to that promise.
1.Fulfilled
2.Rejected
Promise will be in pending state by the time promise is settled.
After either of results we can perform next set of operations.



*/

/* 
    const promise=new Promise((resolve,reject)=>{
        resolve(1);
        });
*/

/* 
    Promise has three methods available to it.
    1.then
    2.catch
    3.finally
    can be used once promise is settled means (resolved or rejected).
    Each method has a callback function and it is invoked based on the state of promise.
    promise.then((onResolvedFn,onRejectedFn)=>{}) so based on state of the promise respective CallBackFunction is invoked.
    promsie.catch((onRejectFn)=>{}) invoked when promise is rejected by a reason. 
    whenever u create a promise ,Js  will  link methods to that promise.
*/


/* 

    const promise=new Promise((resolve,reject)=>{   
        setTimeout(()=>{
            resolve("Hello World");
            },5000);
    })
    promise.then((message)=>console.log(message));
 */
    /* 
    steps 
    1.promise is created.
    2.with the help of promise constructor fn.Constructor is ntg but a special function.
    3.executor fn runs immediatly.
    
    Key points :
    In above js doesnot wait for 5sec to get complete.
    once promise is settled then it respective then block or catch or finally block will be executed.
    
    */
/*     const pr=new Promise((resolve,reject)=>{   
        setTimeout(()=>{
            resolve("Hello World");
            },1000);
    })
    pr.then((message)=>{
        console.log("HII");
        throw new Error("hillo");
        return "HI"})
    .catch((message)=>{console.log(message); return 1}); */

    /* 
            Helper Methods :-
            Below are methods available for promise methods.
            Promise.resolve("Hello").then()
            Promise.reject("World").then()
    */

    /* 
        NOTE POINTS :: 
        1.finally method available on promise never takes params or return a val.
        2.before or after finally take the values accordingly.i.e
        .catch(val=>val+1).finally(()=>).then ((added1)=>console.log(added1));
    */

        /* 
            IMP to know
            function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Fetching data...");
      resolve("Data received");
    }, 2000); // Simulates an API call
  });
}

Promise.resolve("Start")
  .then(value => {
    console.log(value); // "Start"
    return fetchData(); // Returns a promise
  })
  .then(response => {
    console.log(response); // "Data received" after 2 sec
    return "Processing done";
  })
  .then(final => {
    console.log(final); // "Processing done"
  });

        
        */


        /*        Async and Await            */
        /* 
        1.async function :async keywrd is used for a function then it is a async function.
        2.It returns a promise always. 
        3.S1: const fetch1=async ()=>{
            }
          S2: const fetch2=function(){
            }    
        */
           /*  const pr=Promise.resolve("touched");
            const exmaple=async (pr)=>{
                try{
                    const res=await pr;
                    return res;
                }
                catch(err){
                    console.err(err);
                }
                finally{
                    console.log("completed");
                }
            }
            console.log(exmaple(pr)); */


/* 

fetch(https://url.....)
.then(resp => resp.json())
.then(data=> console.log(data));
*/

/* 
fetch will return a promise.once promsie is settled and resolved then then block will take param which was resolved before.
response object will have meta data about http response
like url of request,status__code,Headers --> content-type,authorization,ok__property to know whether http request is successful
or not.
resp.json() ==> what it does??
It goes to response.body which is a readable stream.converts json string to js object.
and then in further .then method we will get the value.
Readable stream all the large json string will not be sent at once.It will be sent in parts.
So that only we always see it as ready stream in response.body.
*/