/* 
Js classified values into 1.Primitive Values
                          2.Non-Primitive Values

    1. Primitive Values:
        Directly stored in memory (stack).
        Immutable (Cannot be changed).
        Compared by value.
        Ex:
        let a =10;
        let b =20;
        console.log(a === b); //true
        they are compared by value but not by references.
        Examples :
        String,Number,Boolean,Undefined,Null,Symbol,BigInt
        When assigned to another variable a copy of the value is made.
        Changes to one variable does not affect another variable.
        Ex:
        let a ="ram";
        let b = a;
        b="ravan";
        console.log(a,b);
        //changing b doesnot affect a since they are separate copies.
*/

/* 
    2. Non-primitive (Reference Values):
        Mutable.(can be changed).
        Stored by reference(heap memory).
        Compared by reference but not values.
        Examples:
        Object,Array,Function.
        let obj1={
            name : "Hithesh"
        };
        let obj2=obj1;
        obj2.name="Ram";
        console.log(obj1.name);
        //Modifying obj2 also affects obj1 because both point to the same memory location.
*/