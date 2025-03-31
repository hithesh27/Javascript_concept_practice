/* 
How to add emojis?? 
It is windows + ;
*/

/* 
<input> tags are self-closing tags that do not and cannot have child elements.
Just use <input /> without children or dangerouslySetInnerHTML.
Use props like value, placeholder, type, etc., to customize the <input>.
*/

/* 
always u need to retrun from map then only can see the rendering results.
*/

/* 
React components ultimately render to HTML, and when it comes to CSS, it's the
final HTML structure that matters, not the React component tree.

When you apply height: 100%; to .todo__container, React doesn’t care.
The browser processes CSS after React renders the HTML.

The real problem happens when the browser applies styles to the final HTML.
Your React component structure is irrelevant to the browser, only the resulting HTML matters.

When you use height: 100%; on .todo__container, it tries to take 100% of its parent’s height.
The parent is <div id="root">, which is inside <body>.
If <body> doesn’t have a height explicitly set to 100%, then it's just as tall as its content.
In HTML, % height is only respected if the parent element has an explicit height. Otherwise,
it collapses.
*/


/* 
input element is inline-block by default, not inline
*/


/* 


*/