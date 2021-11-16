// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
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

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the product of two numbers.
  var result = product(2, 2);
  if (result !== 4) throw new Error('Expected product(2, 2) to be 4. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return 0 when either of the numbers are 0.
  var result = product(0, 12);
  if (result !== 0) throw new Error(`Expected product(0,12) to be 0. Received: ${result}`);
  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should ignore additional numbers.
  var result = product(8, 5, 3, 1, 7, 13);
  if (result !== 40) throw new Error(`Expected product(8,5,3,1,7,13) to be 40. Received: ${result}`);
  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
  var result = product(12);
  if (result !== 12) throw new Error(`Expected product(12) to be 12. Received: ${result}`);
  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.
  var result = product();
  if (result !== 0) throw new Error(`Expected product() to be 0. Received: ${result}`);
  
  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
