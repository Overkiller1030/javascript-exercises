const sumAll = function(numLow, numHigh) {
  let sum = 0;

  if (numLow > numHigh){
    [numLow, numHigh] = [numHigh, numLow];
  }; // if argument[0] is actually higher, we swap the numbers

  if (((numLow || numHigh) < 0) || // If either number is negative
      (!Number.isInteger(numLow || numHigh))|| // If either number is not an integer
      (typeof(numLow) !== "number") || (typeof(numHigh) !== "number")) { // If either number is not a number
        return "ERROR";
      };

  for (i = numLow; i <= numHigh; i++) {
    sum += i;
  }
  return sum;
};
// Do not edit below this line
module.exports = sumAll;
