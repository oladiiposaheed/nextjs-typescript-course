// 01-basic-generic.ts
// Basic generic function

// <T> means "any type"
function identity<T>(value: T): T {
    return value;      // returns same type it receives
}

// Call with number
const newResult = identity(40);
console.log('Number: ' + newResult);

// Call with string
const str_Result = identity('Hello');
console.log('String: ' + str_Result);

