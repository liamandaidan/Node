/**
 * This will hold all async functions and calls
 */

 const fs = require('fs');
 const data = fs.readFileSync('./file.md');//will block operation until file is read in the event loop
 console.log(data);

 console.log("COOL");