/* 
Question: 
p1,p2,p3, .... ...   p100
We need p1,p2,...p5 first to execute in batch using Promise.all
next    p6.......p10 next
.
.
.
.
.       p96 ....... p100 
*/


/* 
    Promise.all()
*/
let num=1;
const p=(timer)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`${timer}`);
        },timer*1000);
    });
}
new Array(4).fill(1).reduce((prev,cur,ind,arr)=>{
  return prev.then((val)=>{
        if(val) console.log(val);
            return Promise.all([p(num++),p(num++)]);
        });
},Promise.resolve());
/* new Array(5).fill(1).reduce(async (prev,cur,ind,arr)=>{
    const arrayVal=await Promise.all([p(num++),p(num++),p(num++),p(num++),p(num++)]);
    console.log(arrayVal);
    return arrayVal;
},0); */

/* const p=(timer)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`${timer}`);
        },timer*100);
    });
} */
/* let num=1;
let prev=Promise.resolve();
const arr=new Array(5).fill(1);
for(let i=0;i<arr.length;i++){
        prev.then((val)=>{
          if(val) console.log(val);
           prev=Promise.all([p(num++),p(num++)]);
    });
} */