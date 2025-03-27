/* 
❌ No, not every JS file is a module by default.
✔️ A file becomes a module if it uses import, export, or is loaded as a module (type="module").
❌ If a file is included as a regular script (<script> without type="module">),
   it is not a module—it runs in the global scope.
*/


/*
Webpack, Vite, Parcel, and Rollup are all bundlers.
But Vite is more than just a bundler—it also acts as a development server.
Bundler:
A bundler is a tool that processes and combines multiple files (JS, CSS, JSON, images, etc.)
into optimized single or multiple files for faster loading.
When we say Webpack, Vite, etc., "process" files, we mean they read, transform,
and optimize those files before they are used in the browser.
*/


/* 
Unlike JavaScript files (.js), JSON files don’t require an explicit export when using ES6 import.
This is because:
JSON is treated as a module automatically by modern bundlers (Webpack, Vite, etc.).
The bundler automatically parses the JSON file and converts it into a JavaScript object or array.
You don’t need to explicitly export anything from questions.json—it’s just data.
*/


/* 
If you tried the same thing without Webpack/Vite (e.g., in a plain browser script), you would get an
error because:
The browser doesn’t support import for JSON by default.
You’d need to fetch the JSON dynamically using fetch().
JSON doesn’t need explicit export.
Webpack/Vite automatically parses JSON files into JavaScript objects.
You can directly import JSON like a module, but this won’t work in plain browser JS without a bundler.
"Plain browsers" refer to regular web browsers like Chrome, Firefox, Edge, Safari, etc.,
running without any extra tools (like Webpack, Vite, or Babel).
*/

/* 
JavaScript scans for imports first, then looks for the file.
If the file exists, it loads and processes it before running the main script.
Only after resolving all imports does it start executing the rest of main.js
*/