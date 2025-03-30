/*
 arrays in JavaScript have .length but not .size. Here's why:

.slice() is an array method that returns a shallow copy of a portion of an array into a 
new array object. It does not modify the original array. 

Syntax : 
array.slice(start, end);
start (Optional): The index to begin extraction. If negative, it's counted from the end of
the array. Defaults to 0 if omitted.
end (Optional): The index to stop extraction. The element at this index is not included.
If negative, it's counted from the end of the array. Defaults to the array's length if omitted.
*/

/* 
If a parent is a grid container, its children (grid items) will be treated as grid items regardless
of whether they're <div>, <span>, or any other element.
*/


/* 
Aspect Ratio
It's the proportional relationship between width and height of an element.
Common aspect ratios: 1:1 (Square), 16:9 (Widescreen), 4:3 (Standard).
Maintaining aspect ratio is important to avoid distortion when resizing.

Scale
Scaling is resizing an element to fit or fill a specific area.
Proportional Scaling: Keeps aspect ratio intact.
Non-Proportional Scaling: Changes aspect ratio, causing distortion.

object-fit: cover (When applied to images or videos)
Scales the element proportionally to completely fill its container.
Crops any overflowing parts to maintain aspect ratio.
Ideal for uniformly displaying images of different aspect ratios in a grid or gallery.
*/


/*
const [products,setProducts]=useState();
return (
products.produts &&
<div>
Hello world
</div>
);
//products is undefined and we are trying to access properties of undefined which throws error.
*/


/* 
pointer-events: none;
  opacity: 0;
*/

/* 
In useEffect u can never pass a async function in first parameter. U should do a call inside 
normal function.

async function app(){
 const resp =await fetch();
}

useEffect(async ()=>{
 const resp =await fetch(); // This fails
},[])  

useEffect(()=>{
  app();
},[])  //THis works 

*/