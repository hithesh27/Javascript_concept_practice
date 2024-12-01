const arr=[1,2,3];
function double(x){
    return x*2;
}
const arr2 = arr.map(double);
console.log(arr2);

const num=[1,2,3,4];
const binary=num.map((x)=>x.toString(2));
console.log(binary);