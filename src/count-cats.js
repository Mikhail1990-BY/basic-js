const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let a =0;
  let b = '^^';
  let c = "^^";
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++){
      if (arr[i][j] === b || arr[i][j] === c){
        a += 1;
      } else {
        continue;
      }
    }
  }
  return a;
};
