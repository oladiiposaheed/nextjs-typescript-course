// 03-generic-vs-union.ts
// Generic vs Union types

// GENERIC: One type at a time
function getFirstGeneric<T>(arr: T[]): T {
    return arr[0];
}

// UNION: Multiple types 
function getFirstMixed(
    arr: (string | number | boolean)[]
): string | number | boolean {
    return arr[0];
}

// Test generic with numbers only
const genericNum = getFirstGeneric([1, 2, 3]);
console.log('Generic number: ' + genericNum);

// Test generic with strings only
const genericStr = getFirstGeneric(['a', 'b', 'c']);
console.log('Generic string: ' + genericStr);

// Test union with mixed types
const mixedResult = getFirstMixed(['hello', 42, true]);
console.log('Mixed first: ' + mixedResult);
