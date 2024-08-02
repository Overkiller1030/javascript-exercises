const repeatString = function(string, num) {
  completeString = '';
  for(i = 0; i < num; i++) {
    completeString += string;
  };
  if (num < 0){
    return 'ERROR'
  }
  return completeString;
};

// Do not edit below this line
module.exports = repeatString;
