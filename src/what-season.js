const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

 if(Object.prototype.toString.call(date)!=="[object Date]"){throw new Error()};
  let month=date.getMonth()+1
  //console.log("date="+date)
  //console.log("month="+month)

  if(month>=1&&month<=2||month==12){console.log("win");return "winter"}
  if(month>=3&&month<=5){console.log("spr");return "spring"}
  if(month>=6&&month<=8){console.log("sum");return "summer"}
  if(month>=9&&month<=11){console.log("aut");return "autumn"}

  
  throw new Error();

};
