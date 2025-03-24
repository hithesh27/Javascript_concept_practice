/* 
Most important topic CSS FlexBox:
FlexBox is a 1d layout model.
It means it deals with layout in only one direction at a time either.
Row : items are arranged from left to right.
column : items are arranged from top to bottom.
FlexBox doesnot handle both rows and columns simultaneously like CSS grid(which is a 2d layout model).
*/


/* 
Why is flexBox called as simplified responsive layout?
FlexBox makes responsive design easier because:
-->No need for media queries.(In many cases)
-->Items automatically resize and align based on screen size.
-->No need for float or position hacks like in older css layouts.
Contd... 
What is "Space Distribution" in CSS FlexBox?
Flex-Box allows dynamic space distribution between elements.This means :
It automatically adjusts size and position of items based on available space.
It allows equal spacing between elements without needing manual margins or padding.
*/


/* 
How CSS FlexBox makes elements align in 2d plane ?? How it was possible ??
It provides some level of 2D control.
You can align items along both axes (main ,cross axis) using align-items and justify-content.
Nested FlexBox layouts will handle complex 2D structures.
Even though we only control one main axis, we still get alignment along both axes.
But for proper 2d layouts CSS grids will be a great choice compared to CSS FlexBox.
*/

/* 
Two main components of flex-box are 
Flex-Container - div/container which we want to convert in flexBox using display:flex 
Flex-Items - direct children or immediate elements in container but not deep elements
*/

/* 
What are main-axis(horizontal-axis) and cross-axis(vertical-axis)?
Above mentioned is a default scenario.
flex-direction means changing direction of main axis.
flex-direction: row; It is default.
flex-direction: column;
main-axis is determined by flex-direction.
Flex-items are arranged along main-axis direction.
*/


/* About flex-direction
flex-direction Value	Main Axis Direction	  Cross Axis Direction
row (default)	         Left → Right	        Top → Bottom
row-reverse	             Right → Left	        Top → Bottom
column	                 Top → Bottom	        Left → Right
column-reverse	         Bottom → Top	        Left → Right
Above all left,right,top,bottom are mentioned with respective to the parent element sizes.
flex-direction: row is default, when we reduce the width of viewport then width of flex
items get changes and becomes less.
Even if width of flex-items is defined once size of screen is decreased automatically it will
be decreased.
*/

/* About flex-wrap
    Default flex-wrap:nowrap;
    when we need to put this property for a flex-Box -->  flex-wrap:wrap;
    Need of flex-wrap is only when if u fix width of flex-item.Once width of flex-item is fixed then 
    flex-items will go to next line.
    flex-wrap:wrap-reverse;
    new rows come above old rows and new rows will be added at next to old item.Whole process will be
    happening at top-left of parent.
*/

/* About flex-flow
   Shorthand notation for flex-direction and flex-wrap
   flex-flow:row wrap;
*/


/*Justify-content  -  align the elements/items according to main axis(horizontal axis).
(default)  Justify-content: flex-start; //all items will be placed at start of main axis.
    Justify-content: flex-end;   //all items will be placed at end of main axis.
    Justify-content: center;//all items will be placed at center of main axis.
    Justify-content: space-around;//It allows same spacing all around.But left
    and rightmost will not have same.
    Justify-content: space-evenly;//It applies same spacing all around.
    Justify-content: space-between;//First and last items are kept in touch.
*/

/*Align-items - align-items on cross axis.(Vertical alignment).
    align-items:flex-start; //All items will align at start of cross axis.(i.e top left corner)
    align-items:flex-end;   //All items will align at end of cross axis.
    align-items:center;     //All items will align at center of cross axis.
(Default value) align-items:stretch;    //All items will stretch from cross axis start to end.
    align-items:baseline;   //It aligns flex-items based on their text baseline instead of their top or
//Text lines up, but boxes don’t! The larger text causes a bigger box, but the bottom of the text aligns.
*/

/*Align-content - handle spacing between multiple rows.
  align-content:flex-start ; //All rows will shift at the top.(cross axis)
  align-content:flex-end   ; //All rows will shift at the end.(cross axis)
  align-content:flex-center; //All rows will be at center
  align-content: space-between / space-evenly / space-around 
*/

/* About gap
gap is applied to the parent (flex container), NOT the child elements.
Unlike margin, which is applied to individual items, gap controls 
spacing between items without affecting edges.
It avoids extra spacing issues compared to margin.
Using margin can cause unintended spacing at the edges of the container,but gap only applies between items.
row-gap and column-gap allow independent control.
like row-gap : 3px;
*/