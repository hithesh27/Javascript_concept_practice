/* 
    
*/
function callbackfn(order_id){
    console.log(order_id,"payment_id");
}
function asyncFn(callbackfn){
    setTimeout(()=>{
        callbackfn("order id");
    },3000);
    return "url1 done";
}
asyncFn(callbackfn);