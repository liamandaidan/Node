//imports
const trails = require("./trails");
const util = require("util");

function getTrailDistance(trail, e) {
  return setTimeout(() => {
    if (trails.hasOwnProperty(trail)) {
      const found = trails[trail];
      e(null, found);
    } else {
      e(new Error("Trail not found!"));
    }
  }, 1000);
}

// function callback(error, trailData) {
//   if (error) {
//     console.log(error.message);
//     process.exit(1);
//   } else {
//     const mi = trailData.miles;
//     const nickname = trailData.nickname;
//     console.log(`The ${nickname} is ${mi} miles long!`);
//   }
// }

const getTrailDistancePromise = util.promisify(getTrailDistance);

getTrailDistancePromise("Pacific Crest")
  .then((trail) => {
    console.log(`The ${trail.nickname} is ${trail.miles} miles long!`);
  })
  .catch((error) => {
    console.log(error);
  });
