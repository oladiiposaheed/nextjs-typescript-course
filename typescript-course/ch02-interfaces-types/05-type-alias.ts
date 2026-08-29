// 05-type-alias.ts
// Type alias with type keyword

// Alias for simple type
type MyString = string;

// Alias for union type

type MyID = string | number;

// Alias for object shape
type Student = {
    name: string;
    age: number;
    course: string;
};


const studentA: Student = {
    name: 'Saheed',
    age: 19,
    course: 'Computer Science'
};

const studentId: MyID = 54321;
const studentName: MyString = 'Hawwa';

console.log(studentName + ' (ID: ' + studentId + ')');
console.log('Studying: ' + studentA.course);