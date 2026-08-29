// 07-arrays-and-objects.ts
// Complex types: arrays and objects

// Define object shape once

interface UserInfo {
    name: string;
    age: number;
    email?: string;
}

// Arrays
const numberList: number[] = [1, 2, 3, 4, 5, 6, 7];
const nameList: string[] = ['Hawwa', 'Saheed', 'Fatimah'];

// Object using interface
const userInfo: UserInfo = {
    name: 'Hawwa',
    age: 29,
    email: 'hawwa@example.com'
};

// Array of objects using interface
const userList: UserInfo[]  = [
    { name: 'Saheed', age: 19 },
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 }
];

console.log('Numbers: ' + numberList.join(', '));
console.log('Names: ' + nameList.join(', '));
console.log('User: ' + userInfo.name + ' (' + userInfo.email + ')');
console.log('Total Users: ' + userList.length);


userList.forEach(user => {
    console.log(user.name + ' is ' + user.age + ' years old');
});