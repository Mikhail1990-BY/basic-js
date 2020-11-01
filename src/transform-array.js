const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  /*if(arr.length === 0){ return []};
    if (typeof(arr) !== 'array'){return 'Error'};
    let arr2 = arr.slice(0);
    for (i = 0; i < arr2.length; i++){
      if(arr2[i] === '--discard-next'){// && arr2.indexOf('--discard-next') !== arr2.length - 1) {
        arr2.splice(i, 2)
      } else {arr2.pop()};
      if(arr2[i] === '--discard-prev'){ //&& arr2.indexOf('--discard-prev') !== 0){
        arr2.splice(i - 1, 2)
      } else {arr2.slice(1)};
      if (arr2[i] === '--double-next'){ //&& arr2.indexOf('--discard-next') !== arr2.length - 1){
        arr2.splice(i, 1, i + 1)
      } else {arr2.pop()};
      if (arr2[i] === '--double-prev'){ //&& arr2.indexOf('--discard-prev') !== 0){
        arr2.splice(i, 1, i - 1)
      } else {arr2.slice(1)};
    }
    return arr2;*/
    if (!Array.isArray(arr)) throw new Error
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      newArray.push(arr[i + 1])
      newArray.pop()
      i += 2
    } else if (arr[i] === '--discard-prev') {
      newArray.pop()
    } else if (arr[i] === '--double-next') {
      newArray.push(arr[i + 1])
    } else if (arr[i] === '--double-prev') {
      newArray.push(arr[i - 1])
    } else {
      newArray.push(arr[i])
    }
  }
  if (arr.includes('undefined')) {return newArray}
  else {return newArray.filter((el) => el !== undefined)} 
  }
