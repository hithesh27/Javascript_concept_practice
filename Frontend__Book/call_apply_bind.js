/* 
Call : 1.invokes a method or function with pointing this to a particular object.
       2.function_name.call(obj_name,p1,p2,p3);
Apply: 1.invokes a method or function with pointing this to a particular object.
       2.function_name.apply(obj_name,[p1,p2,p3]);
Bind : 1.doesnot invoke a method.But it gives copy of a function and binds to a specific object.
       2.const bindedfn=function_name.bind(obj_name,p1,p2,p3);
         bindedfn();
       3.similar to call function.
*/


    /* const obj={
        name:"Hithesh",
        class:"Btech",
        display : function(){
            console.log(this.name+" "+this.class);
        }
    };
    obj.display();
    const obj2={
        name:"SaiShashank",
        class:"Btech"
    };
    obj.display.call(obj2);    */ 


    /* const obj={
        name:"Hithesh",
        class:"Btech",
    };
    const display=function(){
        console.log(this.name+" "+this.class);
    }
    display.call(obj);
    const obj2={
        name:"SaiShashank",
        class:"Btech"
    };
    display.call(obj2);     */