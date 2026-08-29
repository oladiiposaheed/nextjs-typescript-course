// 05-void-examples.ts
// Understanding void return type

// 1. Function that calculates area - returns number

function calculateArea(width: number, height: number): number {
    return width * height;
}

// 2. Function that logs an error - returns void
function logError(message: string): void {
    console.log('Error: ' + message);
}

// 3. Function that checks if number is even - returns boolean
function isEven(num: number): boolean {
  return num % 2 === 0;
}

// Test all functions
const area = calculateArea(10, 5);
console.log('Area: ' + area);

logError('Something went wrong');

console.log('Is 4 even? ' + isEven(4));
console.log('Is 7 even? ' + isEven(7));

