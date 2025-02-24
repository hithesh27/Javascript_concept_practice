//why promise.all() is needed ??
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
All reuests start simultaneously and function waits for all of them to complete before continuing.
This is much faster.
*/

