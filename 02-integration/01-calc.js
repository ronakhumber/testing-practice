// ==================================================
// DEFINE FUNCTION(S)
// ==================================================


// Function sum
// Takes two parameters, num1 and num2
// returns sum of two numbers
function sum(num1, num2) {
  // If first number is not defined, then use it's value as 0
  if(num1 == undefined){
    num1=0
  }
  // If second number is not defined, then use it's value as 0
  if(num2 == undefined){
    num2=0
  }
  // Return the sum of both the numbers
  return num1+num2;
}

// Function difference
// Takes two parameters, num1 and num2
// returns difference of two numbers
function difference(num1, num2) {
  // If first number is not defined, then use it's value as 0
  if(num1 == undefined){
    num1 = 0
  }
  // If second number is not defined, then use it's value as 0
  if(num2 == undefined){
    num2 = 0
  }
  // Return the sum of both the numbers
  return num1 - num2;
}

// Function product
// Takes two parameters, num1 and num2
// returns product of two numbers
function product(num1, num2) {
  // If first number is not defined, then use it's value as 0
  if(num1 == undefined){
    num1 = 0
  }
  // If second number is not defined, then use it's value as 1 since we already have 1 value defined.
  if(num2 == undefined){
    num2 = 1
  }
  // Return the sum of both the numbers
  return num1 * num2;
}

// Function quotient
// Takes two parameters, num1 and num2
// returns quotient of two numbers
function quotient(num1, num2) {
  // If first number is not defined, then use it's value as 0
  if(num1 == undefined){
    num1 = 0
  }
  // If second number is not defined, then use it's value as 1 since we already have 1 value defined.
  if(num2 == undefined){
    num2 = 1
  }
  // If second number is 0, it should return error as mentioned in Test Case 2
  if(num2 == 0){
    return "ERROR";
  }
  // Return the sum of both the numbers
  return num1 / num2;
}

// Function calc
// Takes 3 params : calculation, first number, second number
// returns the result after performing arithmetic operation
function calc() {
  // Using SWITCH cases to determine which calculation
  // user wants to perform & call the function accordingly.
  switch (calculation) {
    case 'add': return sum(firstNumber, secondNumber);
    case 'subtract': return difference(firstNumber, secondNumber);
    case 'multiply': return product(firstNumber, secondNumber);
    case 'divide': return quotient(firstNumber, secondNumber);
    default: return "Operation not supported."
  }
}
// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the correct sum when the user provides: 'add', 1, 1.
  var result = calc('add', 1, 1);
  if (result !== 2) throw new Error('Expected calc("add", 1, 1) to be 2. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return the correct difference when the user provides: 'subtract', 20, 10.

  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should return the correct product when the user provides: 'multiply', 9, 9.

  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // It should return the correct quotient when the user provides: 'divide', 9, 3.

  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // It should return the message 'Operation not supported.' when the user provides: exponent, 2, 8.

  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
