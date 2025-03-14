/* 
All primitives(number,string,bool) when passed from arguments to function parameters then they are passed as new copy.
Non-primitives(Arrays,Objects,Functions) when passed from arguments to function parameters then they are passed by  reference.
*/
/* function changeArr(a){
    a[0]=100;
    a.push(1999);
}
const arr=[1,2,3];
changeArr(arr);
console.log(arr); */
//so arrays are passed as reference.

/* function changeArr(obj){
    obj["class"]="Btech";
}
const obj={
    name :"Hithesh",
    class: "Intermediate"
}
changeArr(obj);
console.log(obj); */
//so objects are passed as reference.

/* function changeObj(object){
    object={
        name : "ram"
    };
}
let obj={
    name : "Hithesh",
    age  :21
}
changeObj(obj);
console.log(obj); */

//Case : 1
/* function changeFunction(func){
    func= ()=>{
        console.log("modified");
    }
}
function display(){
    console.log("say HII");
}
changeFunction(display);
display(); */
/* 
Functions are first class citizens in javascript.So they are stored in heap as objects.Variables hold references to these objects.
*/
//Case : 2
/* function changeFunction(obj){
    obj.display= ()=>{
        console.log("modified");
    }
}
const obj={
    name : "Hithesh",
  display:function(){
    console.log("old");
}
}
changeFunction(obj);
obj.display(); */

//Working with strings : Always creates a new copy.
/* 
function changeObj(str2){
    str2="KArthik";
}
let str1="Hithesh";
str1[0]='p'; //It will not show any console and also no change for zero index.
changeObj(str1);
console.log(str1);  */