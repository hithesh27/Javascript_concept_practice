//Defn:

/*
Promise.allSettled([array of promises])
It returns a promise.
Promise get resolved only when all promises are settled.
Resolved value has array of objects where each object has status : resolved/rejected or 
value : resolved_value/rejected_reason. 
*/

//why Promise.allSettled real-world-examples?

/* 
1.Fetching Multiple APIs (Some Might Fail)

You're calling 5 APIs to get weather data, but some may fail. Instead of stopping everything
when one fails, Promise.allSettled() ensures you get results from the successful ones.

const fetch1 = fetch("https://api.weather.com/city1");
const fetch2 = fetch("https://api.weather.com/city2");
const fetch3 = fetch("https://api.weather.com/city3");
Promise.allSettled([fetch1, fetch2, fetch3]).then((results) => {
    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`City ${index + 1}: Success`);
        } else {
            console.log(`City ${index + 1}: Failed`);
        }
    });
});

2.Bulk Image Uploading:
A user uploads multiple images, but some fail due to file size or network issues.
You want to process the successful uploads instead of failing the entire batch.

3.Sending emails to a list of users. Some emails might fail, but you still want to send to others.
Invalid Email Addresses – If an email address is misspelled or doesn’t exist, the email will bounce.
Mailbox Full – If the recipient’s inbox is full, the email might be rejected.
Server Issues – The recipient’s email server might be down or experiencing delays.
Spam Filters – Some emails might be flagged as spam and not delivered.
Rate Limiting – Email providers might limit how many emails you can send in a short time.
Network Issues – Temporary connectivity issues could cause failures.
Attachment Size Too Large – If an email has large attachments, it might be rejected.
Blacklisted Sender – If your email domain is blacklisted, some servers might block the email.
*/

//Polyfill for promiseAllSettled:
/* 
const p=(timer)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          if(timer==500) reject("500 rejected");
          resolve(`${timer} Resolved`);
          },timer);
    })
  }
const promiseArr=[p(1000),p(2000),p(500)];
const promiseAllSettled=(promiseArray) => {
    return Promise.all(promiseArray.map((promise,ind)=>{
        return Promise.resolve(promise)
                .then((val)=>{
                    return {status:"Fullfilled",value:val}
                },(val)=>{
                    return {status:"rejected",reason:val}
                })
    }))
}
promiseAllSettled(promiseArr).then(val=>console.log(val)); 
*/