/* 
By default if width and height of a flex-container or grid-container.
width will be width of the parent.
and height is based on the content height will increase.

*/


/* 
We need CSS Grid to manage div 2Dimensionally.
Once you make a container a Flexbox (display: flex;) or Grid (display: grid;), all its direct children stop following normal 
block-level or inline-level behavior and instead become flex items or grid items.
*/


/* display : grid;
To make grid-container set its display property as grid.Then that element becomes grid-container.
*/


/* gap : 3px; will be applied on parent container.
gap is a shorthand for rowgap and column gap.
row-gap: 5px; between rows 5px gap.
column-gao : 10px;
*/


/* grid-template-columns to add columns.It will be used on parent container.
Defining width of each column :
-->grid-template-columns : 100px 200px 300px;
This width can be absolute and relative in units.
-->grid-template-columns: 1fr 1fr 1fr
Can also use fr for similar fraction of lengths i.e 1/3rd of available space inside grid container.
available space means here width of the container.
If their are gap values(else default gap values are applied ) then they reduce the available space.
keep fr it will be responsive
-->grid-template-columns:repeat(4,1fr); or (2,100px);
If u donot want to write 1fr repeatedly.their is repeat fn.
It says number of times u want to repeat and what u want to repeat.
(or)
-->grid-template-columns:repeat(auto-fill,100px);
based on available screen size columns will be added dynamically for a given width.
-->grid-template-columns:auto auto;
all available space will be divided into equal half if two auto keywords are written.
-->grid-template-columns:100px auto;/grid-template-columns:100px auto auto;/grid-template-columns:100px 1fr 1fr;
first column takes 100px width and then second column takes remaining space in the width.
*/


/*
grid-template-rows helps to define height of rows.
-->grid-template-rows:100px 200px;
It means first rows will take 100px height and second rows will take 200px height and remaining will take
auto based on content grid will allocate height.
-->grid-auto-rows:150px;
height for all not mentioned height grid-items
*/


/* 
Justify-content helps to align grid in horizonatl direction.
justify-content : center ;
It aligns columns at the center.
justify-content : start ; (By default it is start).
Their are space-around(left and right space will be their but not evenly),
space-between(left and right column will be at extreme),space-evenly,start,end
*/


/* 
Align-content
-->(By default) align-content:stretch; will try to stretch the grid cell .
It stretches all rows or columns to fill the available space inside the container.
Grid items do not stretch—only the rows (or columns) expand to fill space.
-->align-content:center;
-->align-content:start; then content goes top of the grid-container.
-->align-content:space-evenly / space-between / space-around / baseline /end 
Grid items will be aligned vertically.
*/


/* 
Align-items
align-items aligns the grid items inside their grid cells.
align-items:center; //end //baseline
Here grid will not move.ONly grid item inside each grid cell will move and it will only in vertical direction.
*/

