/* 
All sides 
margin: 20px; Applies 20px to all sides 

Vertical and Horizontal 
margin: 20px 10px; 20px for top & bottom, 10px for left & right 

Top, Horizontal, Bottom 
margin: 20px 10px 5px; Top: 20px, Left & Right: 10px, Bottom: 5px
Each side 
margin: 20px 10px 5px 15px; Top: 20px, Right: 10px, Bottom: 5px, Left: 15px 
*/


/* Block Elements: Margins apply fully in all directions (top, right, bottom, left).
Inline Elements:
Only margin-left and margin-right work.
margin-top and margin-bottom are ignored.
Inline-Block Elements:
Margins apply in all directions. */


/* 
When you set margin: auto;, you’re telling the browser:
Distribute the remaining space evenly on both sides of the element.
It works for horizontal centering by calculating the left and right margins automatically to be equal.
When you apply margin: auto; to the left and right of a block-level or inline-block element with a
defined width,the browser tries to distribute the remaining horizontal space evenly.


The browser will not magically distribute the extra vertical space.
Regular block layout does not support automatic vertical centering.
Even if you define a height, like:
.child {
  height: 200px;
  margin: auto;
}


margin-left: auto; ➔ Pushes the element to the right.rightmost edge of its container
margin-right: auto; ➔ Pushes the element to the left.leftmost edge of its container
When you apply margin-left: auto; to an element, the browser tries to push the element as far to the right 
as possible by absorbing all the available free space on the left.It essentially acts like 
a flexible spacerthat grows to occupy the remaining space.
*/


/* 
Inline elements IGNORE margin: auto; completely.
Block elements: When given a specific width, margin-left: auto; and margin-right: auto; center the element horizontally.
margin: auto; only works if the element is block, flex item, or grid item.
For inline-block, margin: auto; has no effect, even if you give it a width.
margin: auto; works on Flex Items and Grid Items.
Using margin: auto; for centering in Flexbox or Grid is less common and not the most popular approach.
*/