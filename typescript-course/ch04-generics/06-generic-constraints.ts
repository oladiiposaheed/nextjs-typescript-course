// 06-generic-constraints.ts
// Generic constraints with extends

// T must have a 'length' property
function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}

// String has length
const stringLength = getLength('Hello');
console.log('String length: ' + stringLength);

// Array has length
const arrayLength = getLength([1, 3, 2, 5, 4]);
console.log('Array length: ' + arrayLength);

