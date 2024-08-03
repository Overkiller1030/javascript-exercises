const removeFromArray = function(array, ...args) {
  return array.filter(item => !args.includes(item));
  // returns a filtered array by filtering original array items, but not including items from args.
}
// Do not edit below this line
module.exports = removeFromArray;
