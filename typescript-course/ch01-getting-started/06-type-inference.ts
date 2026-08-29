// 06-type-inference.ts
// TypeScript can guess types automatically

// TypeScript infers string
const myCity = 'Lagos';

// TypeScript infers number
const productPrice = 99.99;

// TypeScript infers boolean
const shopIsOpen = true;

// TypeScript infers string array
const fruitList = ['apple', 'banana', 'orange'];

// TypeScript infers object shape
const personInfo = {
  name: 'Fatimah',
  age: 19,
  city: 'Lagos'
};

//add explicit types if you want
const explicitType: string = 'This is explicit';


console.log('City: ' + myCity);
console.log('Price: ' + productPrice);
console.log('Is Open: ' + shopIsOpen);
console.log('Fruits: ' + fruitList.join(', '));
console.log('Person: ' + personInfo.name + ' is ' + personInfo.age + ' years old');
console.log(explicitType);