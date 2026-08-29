// 03-type-annotations.ts
// Adding type labels to variables

// string - text
const firstName: string = 'Saheed';
const lastName: string = 'Hawwa';
const fullName: string = firstName + ' ' + lastName;

// number - integers and decimals
const myHeight: number = 175;
const myWeight: number = 70.5;
const todaysTemperature: number = -5;
const myAge: number = 20;

// boolean - true or false
const isStudent: boolean = true;
const isEmployed: boolean = false;
const canDrive: boolean = myAge >= 18;

// Display all
console.log('Full Name: ' + fullName);
console.log('Height: ' + myHeight + 'cm');
console.log('Weight: ' + myWeight + 'kg');
console.log('Temperature: ' + todaysTemperature + '°C');
console.log('Is Student: ' + isStudent);
console.log('Is Employed: ' + isEmployed);
console.log('Can Drive: ' + canDrive);