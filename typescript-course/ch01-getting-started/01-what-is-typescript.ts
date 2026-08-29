// 01-what-is-typescript.ts
// Understanding what TypeScript is

// TypeScript = JavaScript + Types
// Types are labels that describe what kind of value a variable holds

// Without TypeScript (plain JavaScript):
// let age = 'twenty five'; // This would work in JS but cause bugs later

// With TypeScript:
const age: number = 25;
// age = 'twenty five'; // Error: Type 'string' is not assignable to type 'number'

console.log('TypeScript catches type errors before running code');
console.log('Age must be a number: ' + age);