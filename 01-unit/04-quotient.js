// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
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
  return num1 * num2;
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the quotient of two numbers.
  var result = quotient(2, 2);
  if (result !== 1) throw new Error('Expected quotient(2, 2) to be 1. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return the text 'ERROR' when the second number is 0.

  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should ignore additional numbers.

  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.

  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.

  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
