module.exports = function countCats(array) {
  let i=0
  for(let i2=0;i2<array.length;i2++){
    for(let i3=0;i3<array[i2].length;i3++){
      if (array[i2][i3]=='^^'){i++}
    }
  }

 return i
};