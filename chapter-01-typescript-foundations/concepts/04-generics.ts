// The Problem: Two functions doing the same thing
function getFirstNumber(items: number[]): number {
    return items[0];
}

function getFirstString(items: string[]): string {
    return items[0];
}
console.log(getFirstNumber([10, 20, 30]));
console.log(getFirstString(['a', 'b', 'c', 'd']));


// ---- THE SOLUTION ----
// <T> = placeholder for "whatever type you give me"
function getFirst<T>(items: T[]): T {
    return items[0];
}

// works with numbers
console.log(getFirst([10, 20, 30]));
console.log(getFirst(['a', 'b', 'c', 'd']));   // works with strings
console.log(getFirst([true, false, true]));
console.log(getFirst<number>([100, 200, 300]));
console.log(getFirst<string>(['x', 'y', 'z']));

// ---- TWO TYPE PARAMETERS ----
// T is the first type, U is the second type
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}
console.log(pair('Age', 23));
console.log(pair(1, true));
console.log(pair('Name', 'Fatimah'))

// function pair<string, number>(first: string, second: number): [string, number]

// ---- GENERIC CONSTRAINT ----
// T must have a "length" property
function getLength<T extends { length: number }>(item: T):number {
    return item.length;
}
console.log(getLength('Hello'));
console.log(getLength([1, 2, 3]));


// Note: 
// function getFirst<T>(items: T[]): T same as 
// function getFirst<number>(items: number[]): number
// function getFirst<string>(items: string[]): string


