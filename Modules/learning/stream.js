//streams are great because you dont need as much RAM to process data, and can be taken line by line
const readline = require("readline");
const fs = require("fs");

/**
 * Pass in file name to read the file using streams.
 * @param {String} filename the filename specifed to use.
 */
function readFile(filename) {
  const myInterface = readline.createInterface({
    input: fs.createReadStream(filename),
  });
  //option 1
  // myInterface.on("line", (fileLine) => {
  //   console.log(`The line read: ${fileLinenod}`);
  // });
  //option2

  myInterface.on("line", printData);
}

function printData(data) {
  console.log(`Line: ${data}`);
}

module.exports.readFile = readFile;
