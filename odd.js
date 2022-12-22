//declare function - num is the parameter
const isOdd = function(num) {
  //odd numbers will have a remainder 
  return num % 2 !== 0; 
}

//print result in console notice how now, 3 and 8 are the arguments being passed
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));

