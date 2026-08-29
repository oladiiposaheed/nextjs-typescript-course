// 05-function-types.ts
// Function type signatures

// Define function type
type MathOperation = (a: number, b: number) => number;

// Functions that match the type
const addFn: MathOperation = (a, b) => a + b;
const subtractFn: MathOperation = (a, b) => a - b;
const multiplyFn: MathOperation = (a, b) => a * b;

// Function that takes a function as parameter
function calculate(op: MathOperation, x: number, y: number): number {
    return op(x, y);
}

console.log('Add: ' + calculate(addFn, 10, 4));
console.log('Subtract: ' + calculate(subtractFn, 10, 4));
console.log('Multiply: ' + calculate(multiplyFn, 10, 4));