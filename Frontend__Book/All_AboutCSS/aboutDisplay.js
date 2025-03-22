/* 
html element :
height :auto means it is content based.
width  :auto means it expands to 100% of veiwPort width.
*/


/* 
body element :
Body element is a block level element.
It acts as a root container for all visible content in a webPage.
So it has special feature compared to regular block level elements.
width:auto; Expands to the 100% of viewport width or width of html element.(Whichever is larger).
heigth:auto; Exapands to fit its childs elements(content-based).  
*/

/* 
Note :
By default if we donot mention height or width for an element.
it is height: auto and width : auto .
and the behaviour of auto will be different for different display values.
*/


/* 
Block-level-elements:

Example: <div> </div> , <p> </p> , <h1-6> <h1-6> , <ul> <ul> , <ol> <ol> , <li> <li> , <article> </article> , <section> </section>
         <body> </body>
this below mentioned is default nature.
width : expands to 100% of their parent.
height: expands based on content element.
Explicitly
set will work naturally.It means based on whatever height or width ,margin padding set accordingly.
*/

/* 
Inline elements:

Example : <span> </span> , <a> </a> , <i> </i> , <b> </b>
width : shrinks to fit content(cannot be set manually)
height: shrinks to fit content(cannot be set manually)

Explicitly
Does not respect height or width.
Height and width is determined by content and cannot be set manually.
padding-left padding-right and margin-left,margin-right will work.

Note : 
If there is enough space → The content stays on the same line.
If the content exceeds the available space → It wraps within the same line and 
continues onto the next line as needed.
*/

/* 
Inline-Block elements:

Examples : <button> <input> <img> <label> <select>
By default : 
fits the content height and width.

Explicitly:
width,height,margin,padding all will be applied for the inline-block elements.
Use inline-block if you want an inline element to respect width and height.

Note :
If there is enough space → The content stays on the same line.
If the content exceeds the available space → The entire inline-block element moves to the next line.
*/

//Final Note :
//Yes! When you explicitly set a display value, the element fully adopts the behavior of 
//that display type, and all the properties relevant to that new display type will be applied correctly.