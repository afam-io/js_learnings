/* 
Plan
Write a function that returns the nth entry in the Fibonacci sequence, where n is a number you pass in as argument to the function.
Example: fibonacci(3)  // --> 2  (note first number is at position 0)
- Function accepts number n returns n position in a fib sequence
- Requires an algo that can return n number in a fib sequence
- Initial implementation I know that there is a formula for the nth term in a fib sequence
- fib sequence adds previous two terms together 0,1,1,2,3

Inside function
    - Create a for loop which goes up to the nth term in the fib sequence     
    - Create an array with [0,1] 
    - itterate over the array at each stage of the for loop up to and including the nth term.
    - at each stage of the itteration add the past previous two terms.
    - return the nth term

*/

function fibonacci(n) {
  let fibArr = [0, 1];
  for (let i = 0; i < n - 1; i++) {
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
  }
  return fibArr[n];
}

console.log({ fib4: fibonacci(4) });
console.log({ fib3: fibonacci(3) });
console.log({ fib1: fibonacci(1) });
console.log({ fib0: fibonacci(0) });
