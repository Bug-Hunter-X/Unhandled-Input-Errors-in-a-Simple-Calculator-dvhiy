# Unhandled Input Errors in a Simple Calculator

This JavaScript code implements a simple calculator that can perform addition, subtraction, multiplication, and division. However, it contains a bug where it doesn't handle all cases of improperly formatted inputs gracefully.  This can lead to unexpected errors, particularly with non-numeric inputs or malformed expressions.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file provides a corrected version with improved error handling.

## Bug

The original code throws an error if the input expression is not in the format 'number operator number'. It also throws an error if the inputs are not numbers.  A more robust solution should provide informative error messages and handle edge cases more effectively.

## Solution

The solution improves error handling by explicitly checking for invalid inputs and returning `NaN` instead of throwing errors when the inputs are not numbers, or the operator is invalid.  This provides a more user-friendly experience and prevents unexpected application crashes.