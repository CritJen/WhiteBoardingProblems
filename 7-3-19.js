//***  Reverse String Iteratively ***
function reverseString(str) {
  let arrayStr = str.split("");
  let reversedArray = [];
  //We are using closure here so that we don't add the above variables to the global scope.
  function addToArray(array) {
    if (array.length > 0) {
      reversedArray.push(array.pop());
      addToArray(array);
    }
    return;
  }
  addToArray(arrayStr);
  return reversedArray.join("");
}

reverseString("yoyo master");

// Reverse String Recursively ****
function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

//************************************************* */

//Find Factorial
// Recursive
function factorial(num) {
  if (num < 2) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
// Iterative
function factorial(num) {
  let result = num;
  for (i = num - 1; i > 1; i--) {
    result = result * i;
  }
  return result;
}

/************************************************* */
// Multiply first n even numbers
function multiplyEvens(n) {
  if (n === 1) {
    return 2;
  } else {
    let value = n * 2;
    return value * multiplyEvens(n - 1);
  }
}
