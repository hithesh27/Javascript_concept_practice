//why forEach function ??
//If callbackFn is arrow function.See where this refers to.
const obj = {
    name: "Hithesh",
    class: 16
};
console.log("1.-----------------");
const arr=[1,2,3];
arr.forEach((val,ind,linear)=>{
    console.log(val,this.name,this.class);
},obj);
//If callbackFn is normal function i.e here it is anonymous function.
//anonymous function can be passed as a callback or can be assigned to a variable. 
console.log("2.-----------------");
arr.forEach(function (val,ind,arr){
    console.log(val,this.name,this.class);
},obj);
//If callbackFn is normal function i.e here it is named function expression.
console.log("3.-----------------");
arr.forEach(function display(val,ind,arr){
    console.log(val,this.name,this.class);
},obj);
console.log("4.-----------------");
//Note : return keyword can be used inside the callback fn.
//       It helps only to stop that current line on that index and move on to next iteration.
arr.forEach(function display(val,ind,arr){
    if(ind==1) return ;
    console.log(val,this.name,this.class);
},obj);