// 08-union-types.ts
// Union types: a variable can hold more than one type

// string or number
let userId: string | number;
userId = 123;
console.log('ID as number: ' + userId);

userId = 'abc123';
console.log('ID as string: ' + userId);


// Specific values (literal types)
type Status = 'active' | 'inactive' | 'pending';

let userStatus: Status
//console.log('Status: ' + userStatus)

userStatus = 'active';
console.log('Status: ' + userStatus);

userStatus = 'pending';
console.log('Status: ' + userStatus);

// // userStatus = 'deleted'; // Error: not in the union

// Union with Function Parameter

// Union with arrays
const mixedArray: (string | number)[] = [1, 'two', 3, 'four', 5, 'six'];
console.log('FMixed array: ' + mixedArray.join(', '));

// Union in function parameter
function printId(id: string | number): void {
    console.log('ID: ' + id)
}

printId(100);
printId('ABC');
