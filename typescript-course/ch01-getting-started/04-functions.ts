// 04-functions.ts
// Functions with typed parameters and return values

// Function with no parameters, no return

function sayHello(): void {
    console.log('Hello');
}

// Function with parameter and return type
function greet(personName: string): string {
    return 'Hello' + personName + '!';
}

// Function with multiple parameters
function addNumbers(a: number, b: number): number {
    return a + b;
}

// Function with optional parameter
function welcome(personName: string, title?: string): string {
    if (title) {
        return 'Welcome ' + title + ' ' + personName;
    }
    return 'Welcome ' + personName;
}

// Arrow function with types
const multiplyNumbers = (a: number, b: number): number => a * b;

// Call all functions
sayHello();
console.log(greet('Saheed'));
console.log('5 + 3 = ' + addNumbers(5, 3));
console.log(welcome('Saheed'));
console.log(welcome('Saheed', 'Mr.'));
console.log('4 x 6 = ' + multiplyNumbers(4, 6));