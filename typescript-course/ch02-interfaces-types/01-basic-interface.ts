// 01-basic-interface.ts
// Basic interface usage

interface Person {
    name: string;
    age: number;
}

const person1: Person = {
    name: 'Hawwa',
    age: 30
};


const person2: Person = {
    name: 'Fatimah',
    age: 28,
}

console.log(person1.name + ' is ' + person1.age + ' years old');
console.log(person2.name + ' is ' + person2.age + ' years old');
