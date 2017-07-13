function getAverage(array) {
  sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return Math.floor(sum / array.length);
}

console.log(getAverage([2,2,2,2])); //2
console.log(getAverage([1,2,3,4,5,])); //3
console.log(getAverage([1,1,1,1,1,1,1,2])); //1
