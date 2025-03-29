/* 
<div> for wrapping the entire question block: Makes sense as it groups related content.
<h2> for the question title: Appropriate for heading levels, giving semantic meaning to your content.
<ul> for options: Perfect, since the options are a list of possible answers, and <ul> provides semantic
structure.
li> for each option: Good choice, as they are list items within the <ul>.
<button> for clickable options: Correct choice, as these are interactive elements that trigger actions.
*/


/* 
For question why only <h2> </h2> ??
Why <span> is Bad ??
<span> is an inline, non-semantic element. It's mainly used for styling or grouping small chunks of text 
within other elements.
It has no inherent meaning or structure. Screen readers will ignore it as a heading or important content.
Bad for SEO and accessibility—screen readers won't announce it as a heading, so users relying on
accessibility tools can't easily navigate your quiz.


Why <p> is Not Ideal
<p> is a block-level element meant for paragraphs of text—not titles or labels.
It indicates regular content rather than something structurally important like a heading.
Screen readers read <p> content like normal text, not as a label or important title.


Why <h1>, <h2>, etc. Are Ideal
Semantic Meaning: <h1>, <h2>, <h3>, etc., convey the importance and structure of content.
Screen readers will announce them as headings, which helps users understand the hierarchy.
SEO Benefits: Search engines value headings and use them to understand page structure.
Accessibility: Allows users to quickly navigate through content using assistive technologies
(like screen reader shortcuts to jump between headings).
Hierarchy Representation: Using <h2> for questions within a quiz under a <h1> (e.g., "Math Quiz")
creates a clear structure.


Using <h2> (or appropriate heading tags) for questions is the most semantic,accessible, and 
SEO-friendly approach. Using <span> or <p> would make your structure less meaningful and harder 
to navigate for users with assistive technologies.

*/


/* 
About when to use <ol> <ul> <li> ??


<ul> (Unordered List)


Use when order doesn't matter.
Typically, items are related but independent (e.g., navigation links, menu items, quiz options,
features list).
Rendered with bullets by default (can be styled).
When to use: Quiz options, navigation menus, feature lists.


<ol> (Ordered List)


Use when order matters (steps, ranking, etc.).
Items are part of a sequence or hierarchy.
Rendered with numbers by default.
When to use: Instructions, rankings, chronological lists.


<li> (List Item)


Must always be a child of <ul> or <ol>.
Represents individual items within a list.
When to use: When listing items inside <ul> or <ol>.


You should use <ul> with <li> for your quiz options because:

Order doesn't matter (unless it's a ranking quiz).
Semantic structure helps assistive technologies understand that options are related.
Improves accessibility and SEO.


*/


/* 
<ul>, <ol>, and <li> are all Block-level elements.
<ul>	display: block;
<ol>	display: block;
<li>	display: list-item;

Explanation

<ul> and <ol>:

They occupy the full available width by default (block-level).
Each list starts on a new line.

<li>:
Technically, it has display: list-item; by default.
Acts like a block-level element but with additional browser styles for list markers (bullets or numbers).
Takes the full width of its parent (<ul> or <ol>).


“Stack vertically by default” means that block-level elements are arranged one below the other (vertically)
instead of side-by-side (horizontally). Each block-level element takes up the full width of its parent 
container unless styled otherwise.
Block-level elements (<div>, <ul>, <ol>, <li>, <h1>, <p>, etc.) have:
display: block; or similar (list-item for <li>).
Width = 100% of their parent container by default.
They start on a new line, pushing the next element below.
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
Each <li> is stacked vertically inside the <ul>.
They appear one below the other because each <li> is a block-level item (list-item).
*/


/* 
“Horizontally stacking up” means arranging elements side-by-side in a single line instead of vertically (one below the other). This is also called inline layout or horizontal alignment.
Why It Doesn’t Happen By Default
By default, <ul>, <ol>, and <li> are block-level elements.
They stack vertically (top-to-bottom) because each <li> takes up full width of the parent <ul> or <ol>.
How To Stack Them Horizontally
To stack <li> elements horizontally, you need to change their display property or use CSS techniques like
flexbox or grid.

✅Example 1: Using Flexbox (Recommended)
html
Copy
Edit
<ul style="display: flex; gap: 10px;">
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>
💡 Explanation:
display: flex; changes the layout to horizontal by default (flex-direction: row;).
gap: 10px; adds space between items.

✅ Example 2: Using Inline or Inline-block
<ul>
  <li style="display: inline; margin-right: 10px;">Home</li>
  <li style="display: inline; margin-right: 10px;">About</li>
  <li style="display: inline;">Contact</li>
</ul>
💡 Explanation:
Setting display: inline; on <li> makes them behave like text, appearing next to each other.
margin-right adds spacing between them.
*/


/* 
About li 
What display: list-item; Means:

Block-like behavior:
Takes up the full width of its parent (<ul> or <ol>) if not styled otherwise.
Stacks vertically with other <li>s by default.

List marker rendering:
Shows bullets (<ul>) or numbers (<ol>).
This marker can be styled or removed with list-style-type or list-style: none;.

1.list-style : none removes all Remove markers.
2.list-style-type: none; Removes the markers (bullets/numbers) from the list items but keeps their block-level
 behavior.
*/


/* 
 Browsers apply default padding and margin to many HTML elements, including lists (<ul>, <ol>, <li>),
 headings (<h1> - <h6>), paragraphs (<p>), and more.
To remove browser default styles from elements like <ul>, <ol>, and <li>, you need to reset or override
the default padding, margin, and list markers.
*/

/* 
Characteristics of Inline-Level Content
No Line Breaks:
They do not start on a new line.
They flow alongside other inline content horizontally until they reach the end of the parent block.
Respect Line Height:
Their height is determined by the line-height of their parent element, not their own height property.
Width is Based on Content:
They only take up as much width as their content requires.
width and height properties usually don’t work unless they are turned into inline-block.
Affected by text-align:
They are centered if text-align: center; is applied to their parent block-level element.
*/


/* 
Text-align : center;
text-align: center; centers only inline-level content within a block-level container. It does not
directly affect block-level elements.


What Counts as Inline-Level Content?
Text Nodes (Plain Text)
Inline Elements: <span>, <a>, <strong>, <em>, <b>, <i>, <img>, <button> (by default).
Inline-block Elements: Any element styled with display: inline-block;.


text-align: center; is only effective for inline, inline-block, and text content.

Why This Happens
text-align: center; works by affecting the inline-level content within a block-level container.
Browsers treat inline and inline-block elements as text-like content for alignment purposes.
So, when you use text-align: center;, the inline and inline-block elements are centered like
text within the parent.

To center block-level elements, you need other methods:
Flexbox: display: flex; justify-content: center;
Grid: display: grid; place-items: center;
Margin: margin: auto; (if width is set).


text-align: center; affects inline-level content inside a block-level element.
When you apply text-align: center; to .App, all text content (including text in <h1>) gets centered.
The <h1> itself remains block-level, occupying the full width, but its text is centered within it.


Inheritance:
Some CSS properties, like text-align, are inherited by child elements.
When you apply text-align: center; to a parent, all inline or inline-block elements within that parent
inherit the centering and also block-level-text-content.
Example: <h1> is block and <button> is inline-block by default, so their text is centered.


Example : 
<button style="width: 200px; height: 300px; text-align: center;">HI</button>
When you apply text-align: center; to a block-level or inline-block element, it horizontally centers
inline-level content within it.
The text HI is inline-level content.
So, text-align: center; will center the text horizontally only within the <button>.
Vertical Centering Not Handled by text-align.


For inline :
Behavior of text-align: center;
It has no effect when applied directly to an inline element.


Flexbox and Grid use their own alignment systems for centering items.
But text within a flex or grid item can still be centered with text-align: center;.
*/


/* 
Always apply list-style: none; to the <ul> or <ol>, not to the <li>.
This keeps your code clean, consistent, and easier to maintain.
*/