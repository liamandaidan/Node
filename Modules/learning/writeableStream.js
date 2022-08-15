const fs = require("fs");
//import our prev stream class for testing
const { readFile } = require("./stream");
const FILENAME = "output.txt";
const fileStream = fs.createWriteStream(FILENAME);

fileStream.write("This is cool!");
fileStream.write("This is awesome 2nd");
fileStream.write("nice, 3rd.");

fileStream.end();

readFile(FILENAME);
