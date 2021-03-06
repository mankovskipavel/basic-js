const { config } = require("chai");
const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let narr=[]
 // console.log(arr)
  if(!Array.isArray(arr)){throw new Error();}
 // arr.map(function(element,index){
    //console.log("elemnt="+element)
    //console.log("index="+index)
   /* if (element=='--double-next'){
      if(element[index+1]!=undefined){narr.push(element[index+1]);return}
      return
    }
    if (element=='--discard-prev'){if(narr.length!=0){narr.pop()};return}
    if (element=='--double-prev'){if(narr.length!=0){narr.push(element[index-1])};return}
    if (element[index-1]=='--discard-next'){return}
    if (element=='--discard-next'&&element[index+1]!=undefined){return}
    narr.push(element)
  })*/

 for(let index=0;index<arr.length;index++){
    if (arr[index]=='--double-next'){
      if(arr[index+1]!=undefined){      narr.push(arr[index+1]);continue}else {continue}
    }
    
    if (arr[index]=='--discard-prev'){
      if(narr.length!=0&&arr[index-2]!=='--discard-next'){narr.pop();continue}else{continue}
    }
    
    if (arr[index]=='--double-prev'){
      if(narr.length!=0&&arr[index-2]!=='--discard-next'){narr.push(arr[index-1]);continue}else {continue}
    }
   // if (arr[index-1]=='--discard-next'){continue}
    if (arr[index]=='--discard-next'){index++;continue
     // if(arr[index+1]==undefined){continue}
    }
    narr.push(arr[index])


  }
  return narr
};
