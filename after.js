// with custom callback

function createArray(max, callback) {
  var arr = [];
  for (var i = 1; i <= max; i++) {
     arr.push(i);
  }
  setTimeout(function() {
    return callback(null, arr);
  }, 5000);
}

function getEvenNumbers(arr) {
  return arr.filter(function(num){
    return num % 2 === 0;
  });
}

createArray(1000, function(error, response){
  console.log(getEvenNumbers(response).length);
});




