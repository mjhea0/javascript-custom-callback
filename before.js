// without custom callback

function createArray() {
  var arr = [];
  for (var i = 1; i <= 1000; i++) {
     arr.push(i);
  }
  setTimeout(function() {
    return arr;
  }, 5000);
}

function getEvenNumbers(arr) {
  console.log(arr);
  return arr.filter(function(num){
    return num % 2 === 0;
  });
}


var numberArray = createArray();
var evenNumberArray = getEvenNumbers(numberArray);
console.log(evenNumberArray.length);