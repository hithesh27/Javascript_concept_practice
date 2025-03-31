/* 
const inputRef = useRef();
What This Does:
Creates a Ref Object:
inputRef is a ref object with a special property called current.
inputRef = { current: null } initially.
*/


/* 
Ref Initialization:
const inputRef = useRef(null);
Creates a reference to the DOM element.
inputRef.current will point to the <input> element.
*/

/* 
Reading Value:
inputRef.current.value
This directly accesses the current value stored in the DOM.
No React state involved, so React doesn’t re-render when you read this value.
*/

/* 
Setting Value:
inputRef.current.value = "New Value";
Directly modifies the DOM value.
React is not aware of this change, so if you want to trigger something based on this change,
you need to handle it manually.
*/

/* 
Why Refs Work Here
Refs are a direct reference to the DOM element, bypassing React's state management.
They allow you to read and modify inputs without triggering re-renders.
Useful for performance optimizations, handling focus, and integrating third-party libraries.
*/

/* 
import React, { useRef } from "react";
function App() {
  const inputRef = useRef(null);
  const handleShowValue = () => {
    alert(`Input value is: ${inputRef.current.value}`); // Read the current value directly from the DOM
  };
  const handleSetValue = () => {
    inputRef.current.value = "New Value"; // Directly setting the DOM value
  };
  return (
    <div>
      <input type="text" ref={inputRef} defaultValue="Hello" /> {Uncontrolled input}
      <button onClick={handleShowValue}>Show Value</button>
      <button onClick={handleSetValue}>Set New Value</button>
    </div>
  );
}
export default App;
*/