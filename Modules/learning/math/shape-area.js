const PI = Math.PI;

function circleArea(rad) {
  return PI * Math.pow(rad, 2);
}

module.exports.circleArea = circleArea;
module.exports.squareArea = (len) => {
  return len * len;
};
