const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)){
    let str = [];
      for (let member of members){
        if (typeof member === 'string'){
        let arrItem = member.toUpperCase().trim();
        str.push(arrItem[0]);
        }
  } return str.sort().join('');
  } else {
    return false;
  }
};
