// 02-optional-properties.ts
// Optional properties with ?

interface PersonWithEmail {
  name: string;
  age: number;
  email?: string;
}

// Without email
const userA: PersonWithEmail = {
  name: 'Saheed',
  age: 19
};

// With email
const userB: PersonWithEmail = {
  name: 'Hawwa',
  age: 30,
  email: 'hawwa@example.com'
};

console.log(userA.name + ' has no email');
console.log(userB.name + ' email: ' + userB.email);