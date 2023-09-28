/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
    constructor() {
      this.result = 0;
    }
  
    add(number) {
      this.result += number;
    }
  
    subtract(number) {
      this.result -= number;
    }
  
    multiply(number) {
      this.result *= number;
    }
  
    divide(number) {
      this.result /= number;
    }
  
    clear() {
      this.result = 0;
    }
  
    getResult() {
      return this.result;
    }
  
    calculate(expression) {
      // First, remove all continuous spaces from the expression.
      expression = expression.replace(/\s+/g, ' ');
  
      // Split the expression into an array of tokens.
      const tokens = expression.split(' ');
  
      // Create a stack to store the operands and operators.
      const stack = [];
  
      // Iterate over the tokens and evaluate the expression.
      for (const token of tokens) {
        if (token === '+') {
          // Add the top two operands on the stack.
          const operand2 = stack.pop();
          const operand1 = stack.pop();
          stack.push(operand1 + operand2);
        } else if (token === '-') {
          // Subtract the top two operands on the stack.
          const operand2 = stack.pop();
          const operand1 = stack.pop();
          stack.push(operand1 - operand2);
        } else if (token === '*') {
          // Multiply the top two operands on the stack.
          const operand2 = stack.pop();
          const operand1 = stack.pop();
          stack.push(operand1 * operand2);
        } else if (token === '/') {
          // Divide the top two operands on the stack.
          const operand2 = stack.pop();
          const operand1 = stack.pop();
          stack.push(operand1 / operand2);
        } else {
          // If the token is a number, push it onto the stack.
          if (!isNaN(token)) {
            stack.push(parseFloat(token));
          } else {
            // If the token is not a number, throw an error.
            throw new Error('Invalid expression');
          }
        }
      }
  
      // The final result is the last operand on the stack.
      this.result = stack.pop();
      return this.result;
    }
  }
  
const calculator = new Calculator();

// Add 2 and 3.
calculator.add(2);
calculator.add(3);

// Get the result.
const res = calculator.getResult();

// Display the result.
console.log(res); // 5

// Calculate a more complex expression.
const expression = '10 + 2 * (6 - (4 + 1) / 2) + 7';
const result = calculator.calculate(expression);

// Display the result.
console.log(result); // 21

module.exports

// ------------------

class Calculator {
    constructor(){
      this.result = 0
    }
  
    add(number) {
      this.result += number
    }
  
    subtract(number){
      this.result -= number
    }
  
    multiply(number){
      this.result *= number
    }
  
    divide(number){
      if (number === 0){
        throw new Error('Cannot divide by Zero')
      } else {
        this.result /= number
      }
    }
  
    clear(){
      this.result = 0
    }
  
    getResult(){
      return this.result
    }
  
    calculate(expression){
      const cleanExpression = expression.replace(/\s+/g,'')
    const isValidExpression = /^[0-9+\-*/().\s]+$/.test(cleanExpression)
  
      if (!isValidExpression){
        throw new Error('Invalid Expression Format')
      }
  
      const dividedByZeroRegex = /\/\s*0(?!\d)/;
      if (dividedByZeroRegex.test(cleanExpression)) {
      throw new Error('Divide by zero error');
      }
  
      try {
        this.result = eval(cleanExpression)
      } catch (error) {
        throw new Error('Invalid Expression')
      }
    }
  }