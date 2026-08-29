// 02-generic-array.ts
// Generic with arrays

// <T> means any type, T[] means array of that type
function getFirst<T>(arr: T[]): T {
    return arr[0];
}

// Works with numbers
const firstNumber = getFirst([10, 20, 30]);
console.log('First number: ' + firstNumber);

// Works with strings
const firstString = getFirst(['a', 'b', 'c']);
console.log('First string: ' + firstString);