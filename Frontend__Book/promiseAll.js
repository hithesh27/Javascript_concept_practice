//why Promise.all() is needed ??
/* 
    It is used to execute multiple async operations in parallel
    and wait for all of them to complete before proceeding.
    It is useful when you have independent async tasks that can run simultaneously and you need
    all results together.
    async task1 ----------------------->  in
    async task2 --------------->          parallel
    async task3 ------------------->      and wait for all of them to complete before proceeding.
*/

//Lets understand what is dashboard in this software field:

/* 
Each dashboard is designed to show only the most relevant data for the user. A business owner sees
sales stats, while a developer sees server logs. Dashboards help in quick decision-making
A dashboard in software is a visual interface that displays key information, metrics, and data in
an easy-to-understand format. It helps users quickly analyze and monitor important aspects of a system
or business.
*/

/* 
Real-World-Example : 
Imagine I am building a dashboard that displays:
1.user profile information from one api call.
2.user orders  information from another api call.
3.user notification information from third api call.
Since these requests are independent should be fetched in parallel to optimize speed 
instead of fetching one after the another.
without Promise.all() sequential execution slow.Each request waits for previous one to complete
making the execution slow.
example without Promise.all():
async function fetchUserData() {
    let profile = await fetch("/api/user/profile").then(res => res.json());
    let orders = await fetch("/api/user/orders").then(res => res.json());
    let notifications = await fetch("/api/user/notifications").then(res => res.json());
    console.log({ profile, orders, notifications });
}
fetchUserData();

with Promise.all():
parallel execution
async function fetchUserData() {
    let [profile, orders, notifications] = await Promise.all([
        fetch("/api/user/profile").then(res => res.json()),
        fetch("/api/user/orders").then(res => res.json()),
        fetch("/api/user/notifications").then(res => res.json())
    ]);

    console.log({ profile, orders, notifications });
}
fetchUserData();
All requests start simultaneously and function waits for all of them to complete before continuing.
This is much faster.
*/

//Definition:
/* 

Promise.all(iterable) is a method that takes multiple promises as input and returns a single promise that:
✅ Resolves when all input promises are resolved, returning an array of results.
❌ Rejects immediately if any promise fails, returning the first rejection error.

*/

//polyfill


/* const p1=(timer)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(timer==5000) reject("5000 rejected");
        resolve(`${timer}`);
        },timer);
  })
}
const promsieAll=(promisearray)=>{
    let results=[];
    let count=0;
   return new Promise((resolve,reject)=>{
        promisearray.forEach((pr,ind,arr)=>{
        pr.then((val)=>{
//            console.log(val);
            results[ind]=val
            ++count;
            if(count==arr.length){
                resolve(results)
            }
            })
        .catch((err)=>{
            console.log(err);
            })
        })
   })
}
promsieAll([p1(1000),p1(5000),p1(2000)]).then((val)=>console.log(val))
.catch((err)=>console.log(err)); */

//Error case how it is handled ???

/* 
1.Fetching User Dashboard Data (All Must Load Together)
Imagine you're building a user dashboard that shows:

Profile details (/api/user/profile)
Orders (/api/user/orders)
Notifications (/api/user/notifications)
If any of these fail, the dashboard should not load incomplete data, so you use Promise.all()


2.Downloading Multiple Images (All or Nothing)
If you're downloading multiple images for a gallery, but even one fails, you don't want an incomplete gallery
*/