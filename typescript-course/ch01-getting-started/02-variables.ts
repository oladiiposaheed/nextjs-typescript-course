// 02-variables.ts
// let vs const

// const - value never changes
const myName: string = 'Saheed';
const birthYear: number = 2006;
const myCountry: string = 'Nigeria';

// let - value can change
let currentAge: number = 19;
currentAge = 20;

let totalScore: number = 0;
totalScore = totalScore + 10;
totalScore += 5;

console.log('Name: ' + myName);
console.log('Birth Year: ' + birthYear);
console.log('Country: ' + myCountry);
console.log('Current Age: ' + currentAge);
console.log('Score: ' + totalScore);