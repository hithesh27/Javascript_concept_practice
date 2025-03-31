/* 
React's handling of form inputs and how the DOM interacts with state and refs:
onChange	Triggered when the value of an input changes.

import React, { useState } from "react";
function App() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
  console.log(event); // SyntheticEvent object
  console.log(event.target); // Actual DOM element (<input>)
  console.log(event.target.value); // The value entered in the input
  setInputValue(event.target.value);
  };
  return (
    <input type="text" value={inputValue} onChange={handleChange} />
  );
}
export default App;
*/


/* 
Connection Between value and State (Controlled Components):
In React, a controlled component is one where the form data is handled by the component's state.
If you set the value prop and handle changes with an onChange event, the input becomes controlled.

import React, { useState } from "react";
function App() {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);  // Updating state with the current value
  };
  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Current Value: {text}</p>
    </div>
  );
}
export default App;
When you type something in the <input>, onChange fires and updates the state (text).
Since the value is bound to state (text), React re-renders the component with the new value.
Whatever you type will always be reflected in the value prop, because React controls it.
*/

/* 
Uncontrolled Component (Using Refs)
If you don't use value and onChange, the <input> is uncontrolled and React doesn't manage its state.
import React, { useRef } from "react";
function App() {
  const inputRef = useRef(null);
  const handleClick = () => {
    alert(inputRef.current.value);  // Accessing the DOM value directly
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Show Value</button>
    </div>
  );
}
export default App;
React doesn't control the <input> here. The browser manages the value.
To read the value, you access the DOM element directly via ref.
Whatever you type is stored directly in the DOM, not in React's state.
The <input> element here is uncontrolled because:

We are not using the value prop to bind it to a React state.
React is not responsible for updating or maintaining its value.
Whatever you type is stored directly in the DOM's memory, not in React’s state.
*/

/* 
Whatever we type in input field will be seen in value ?? is it ??
If it's a controlled component: Yes, whatever you type is reflected in the value prop, which is
tied to state.
If it's an uncontrolled component: No, the value prop is not used, so typing won't update the value.
Instead, the text is stored in the DOM itself.
*/



/* 
 Why value Doesn't Update with Typing
What happens if you try this:
<input type="text" ref={inputRef} value="Hello" />
The value prop in React is meant for controlled components only.
If you provide a value prop to an uncontrolled component without onChange, it becomes read-only.
React will render the input with the initial value "Hello" and will not update it as you type.
Reason:
When you set a value prop in React:
It tells React, "This is the only valid value for this input."
React will ignore whatever you type, and the <input> will always display the same value.
Where the Text is Stored in Uncontrolled Components
In uncontrolled components:
The text you type is stored in the DOM’s memory, not React's state.
You can access it using the .value property of the DOM element, like this:
console.log(inputRef.current.value);
React has no idea what you typed unless you explicitly read the value from the DOM using refs.
*/


/* 
import React, { useRef } from "react";
function App() {
  const inputRef = useRef(null);
  return (
    <div>
      <input type="text" ref={inputRef} defaultValue="Hello" />  {Using defaultValue }
      <button onClick={() => alert(inputRef.current.value)}>Show Value</button>
    </div>
  );
}
export default App;
Here, we are using defaultValue instead of value.
defaultValue sets the initial value of the input, but it does not control the input’s state.
Whatever you type after rendering is stored directly in the DOM.
*/


/* 
Two-Way Binding Flow

User types in the input.
onChange handler is triggered.
State is updated with setName(event.target.value).
React re-renders the component, providing the updated value to the <input>.
The <input> displays the latest state.
*/

/* 
Using Refs for Performance Optimization
If you have many inputs or complex components, using controlled components can cause performance issues
because of frequent re-renders.
In such cases, using refs to directly access the DOM elements can be more efficient.
*/

/* 
If value is provided without onChange: It makes the input read-only. The displayed value is whatever
you set, but typing won't change it.
If value is not provided: The value of the input is whatever the user types, stored directly in the
DOM, not React state. React doesn't know or track this value unless you read it via a ref.
If you use defaultValue instead of value: It sets the initial value only. After that, typing 
changes the value directly in the DOM.
*/