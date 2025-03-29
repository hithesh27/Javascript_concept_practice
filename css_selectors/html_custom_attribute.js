/* 
Standard (Predefined) Attributes:

These are defined by HTML specifications.

Example: id, class, src, href, alt, disabled, checked, etc.

Browsers have built-in handling and meaning for these attributes.

Custom Attributes (Must Start with data-):

Any attribute not defined by HTML specifications.

Must start with data- to be valid.

Example: data-user-id, data-is-correct, data-answer, etc.

Useful for storing extra information that JavaScript can access via .dataset.

Invalid Custom Attributes:

Attributes like is-correct, user-id, answer, etc., without the data- prefix will be ignored or cause errors.

Browsers might completely ignore them or treat them inconsistently.
*/


/* 
Custom attributes (data-*) are super useful because they let you attach extra information to HTML elements
without disrupting the structure or behavior of the element itself. They're especially handy in JavaScript
handling, styling, React components, and accessibility.
*/