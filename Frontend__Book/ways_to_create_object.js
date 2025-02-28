//can create objects using object literal {}: 
//properties are defined directly inside curly braces.
/* 
    const obj={
        name : "Hithesh",
        age  : 23
    };
    console.log(obj); 
*/
//create objects using new.Object();

 /* 
    const obj1=new Object(null);      //{}
    console.log(obj1); 
    const obj2=new Object(undefined); //{}
    console.log(obj2); 
    const obj3=new Object(obj);       //same reference to obj
    console.log(obj3); 
    const obj4=new Object(42);        //creates a wrapper object for primitives.(like number,boolean,string)
    console.log(obj4);                //Number {42}
    const obj5=new Object("Hithesh"); //String {"Hithesh"}
    console.log(obj5); 
    const obj6=new Object(true);      //Boolean{true}
    console.log(obj6); 
     */
    //if passed an array,function,obj returns same reference.
    /* const obj4=new Object(42); 
        It creates a Number object,not a plain text.
        but not recommended to use number objects unexpected behaviour.
    */