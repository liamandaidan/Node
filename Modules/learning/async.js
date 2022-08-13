const fs = require('fs');
fs.readFile('./file.md', (error, data) => {
    if(error) throw error;
    console.log(data);
})

console.log("COOL");