const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(num) {
  if(typeof(num) !== 'string'){
    return false;
  } else if(typeof(parseInt(num)) === 'NaN'){
    return false;
  }
  else if(num < '1' && num > '15'){
    return false;
  }
  
};
