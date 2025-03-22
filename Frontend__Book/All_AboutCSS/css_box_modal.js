/* 
Every Html element is a rectangular box that consits of the following layers.
1.Content - The actual content inside element.(text,images,etc.).
2.Padding - The space between content and border.
3.Border  - Visible or invisible outline of an element.
4.Margin  - The space outside the element that separates the element from others.
*/


/* 
How is an element's Total Width is calculated ?
Total width = width + padding-left + padding-right + border-left + border-right + margin-left
              + margin-right
*/


/* 
By default width and height only apply to content,but can be changed using following:
Box-sizing Concept
So it helps to apply width,height for following layers in the box modal wherever it is needed.
box-sizing : border-box;
In this case height,width will be summation of border-width + padding + content.
box-sizing : content-box; (Default)
In this case height,width will be summation of only content.
Always try to use box-sizing:border-box; for predictable layouts.
*/