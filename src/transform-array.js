const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let narr=[]
 // console.log(arr)
  if(!Array.isArray(arr)){throw new Error();}
  arr.map(function(element,index){
    console.log("elemnt="+element)
    console.log("index="+index)
    if (element=='--double-next'){if(element[index+1]!=undefined){narr.push()};return}
    if (element=='--discard-prev'){if(narr.length!=0){narr.pop()};return}
    if (element=='--double-prev'){if(narr.length!=0){narr.push(element[index-1])};return}
    if (element[index-1]=='--discard-next'){return}
    narr.push(element)
  })
  return narr
};
