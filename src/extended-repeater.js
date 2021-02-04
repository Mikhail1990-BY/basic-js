const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //throw new CustomError('Not implemented');
  if (typeof str == 'number') {
    str = str.toString();
  }
  if (typeof str == 'boolean' && typeof options.addition == 'boolean') {
    str = str.toString();
    options.addition = options.addition.toString();
  }

  if (str === null && options.addition === null) {
    str = 'null';
    options.addition = 'null'
  }
if (typeof str == 'object') {
  str = str.toString();
}
if (typeof options.addition == 'object') {
  options.addition = options.addition.toString();
}

if (typeof options.addition == 'array'){
  options.addition = options.addition.join('');
}

  let arrAd = [];
if (options.addition) {
  if (typeof options.additionRepeatTimes == 'number') {
    for (i = 0; i < options.additionRepeatTimes; i++){
      arrAd.push(options.addition)
    }
  } else {
    arrAd = [options.addition];
  }
}
let optStr;
if (!options.additionSeparator) {
  optStr = arrAd.join('|');
} else {
  optStr = arrAd.join(options.additionSeparator);
}
let arr2 = [];
let Str = str + optStr;
if (typeof options.repeatTimes == 'number'){
    for (i = 0; i < options.repeatTimes; i++){
    arr2.push(Str);
  }
  } else {
    arr2 = [Str];
  }
  if (!options.separator) {
    return arr2.join('+');
  } else {
    return arr2.join(options.separator);
  }





  // let arr = [str];
  // if (options.addition) {
  //   arr.push(options.addition)
  // }
  // let a = arr.join('');
  // let arr2 = [];
  // if (typeof options.repeatTimes == 'number'){
  //   for (i = 0; i < options.repeatTimes; i++){
  //   arr2.push(a);
  // }
  // } else {
  //   arr2 = [a];
  // }
    
  // if (!options.separator) {
  //   return arr2.join('+');
  // } else {
  //   return arr2.join(options.separator);
  // }
  
};
  