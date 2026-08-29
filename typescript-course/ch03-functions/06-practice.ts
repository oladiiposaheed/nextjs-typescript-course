// 06-practice.ts
// Final practice for Chapter 3

// 1. Function with optional parameter
function introduce(personName: string, personTitle?: string): string {
  if (personTitle) {
    return 'I am ' + personTitle + ' ' + personName;
  }
  return 'I am ' + personName;
}

// 2. Function with default parameter
function calculateArea(width: number, height: number = 10): number {
  return width * height;
}

// 3. Function with rest parameter
function findLargest(...nums: number[]): number {
  let largest = nums[0];
  for (const num of nums) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
}

// 4. Function type
type StringToNumber = (text: string) => number;

const getLength: StringToNumber = (text) => text.length;
const countWords: StringToNumber = (text) => text.split(' ').length;

// Test everything
console.log(introduce('Saheed'));
console.log(introduce('Saheed', 'Mr.'));

console.log('Area (default height): ' + calculateArea(5));
console.log('Area (custom height): ' + calculateArea(5, 20));

console.log('Largest: ' + findLargest(3, 7, 2, 9, 5));
console.log('Largest: ' + findLargest(10, 20, 30));

console.log('Length of "Hello": ' + getLength('Hello'));
console.log('Words in "Hello TypeScript World": ' + countWords('Hello TypeScript World'));