const fs = require("fs");

fs.readFile("./text.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(`Provided file data: ${data}`);
  }
});
