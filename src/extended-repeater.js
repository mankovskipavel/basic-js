const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let newst=str

  if (options["additionRepeatTimes"]==undefined){options.additionRepeatTimes=0}
  if (options["RepeatTimes"]==undefined){options.RepeatTimes=0}

  if(options["separator"]==undefined){   
    options.separator="+"
    }
  let add=""


if(options["addition"]!==undefined){
    if(options["additionSeparator"]==undefined){options.additionSeparator="|"}
  
  add+=options["addition"] 
 // console.log("add+aditonal="+add)
  for(let j=1;j<options['additionRepeatTimes'];j++){
    add+=options["additionSeparator"]+options["addition"]
  }
}  
newst+=add
let na=[]
na.push(str+add)

  for(let i=1;i<options['repeatTimes'];i++){
    na.push(str+add)       
    }
  return na.join(options.separator)
};
  