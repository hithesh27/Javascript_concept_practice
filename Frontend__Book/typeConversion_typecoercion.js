//Two types of conversion in JavaScript:
//Explicit Conversion: (type conversion) 
/*
It is explicit type conversion.with help of developer we can convert from one data type
to another data type using JS built in functions.
Example:
console.log(Number("123")); //123
console.log(String(100));   //"100"
console.log(Boolean(1));    //true
console.log(Number(undefined)) //NaN (Because it has no numeric value representation)
console.log(Number(null))   //0
*/

//Implicit Conversion: (type coercion)
/* 
It happens automaticaly when javascript tries to operate on values of different types.
Example :
//any arithmatic operation and string is not involved in any of operand
//then that operand is converted to number
console.log(null + 1) //2
console.log("5"+3); //53 number coerced to string
console.log("5"-3); //string is coerced to number.(-,/,*,%)
console.log("5"==5); //string is coreced to number
console.log(false==0); //false is coerced to 0
console.log(undefined+1) //NaN
console.log([]+1) //1 [] converts to 0
*/
/* 
In case of logical operators :

*/