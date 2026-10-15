// "async" before a function means:
// "This function does something that takes time."

async function sayHello(): Promise<string> {
    return 'Hello!';
}
console.log(sayHello());


// ---- await ----
// "await" waits for the Promise to finish, then gives you the value
async function main() {
    const message = await sayHello();
    console.log(message);
}
main();


// ---- FETCHING DATA ----
async function getUser() {
    // 1. Ask for data
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

    // 2. Convert to JSON
    const data = await response.json();
    
    // 3. Use the data
    console.log(data.name);
    console.log(data.email);
}

getUser();