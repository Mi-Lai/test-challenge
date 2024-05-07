//Implement a function to calculate the factorial of a number using recursion.
//Ensure it handles edge cases: negative numbers or non-integer inputs

function factorial(n) {
    // Check if the input is not an integer or is negative
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Factorial is undefined for non-integer numbers or negative numbers");
    }
    
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: factorial of n is n times factorial of (n-1)
    else {
        return n * factorial(n - 1);
    }

}
module.exports = {factorial };
