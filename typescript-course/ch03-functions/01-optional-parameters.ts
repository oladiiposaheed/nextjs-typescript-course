// 01-optional-parameters.ts
// Optional parameters with ?

function greetPerson(pName: string, pTitle?: string): string {
    if (pTitle) {
        return 'Hello, ' + pTitle + ' ' + pName;
    }
    return 'Hello, ' + pName;
}

console.log(greetPerson('Saheed'));
console.log(greetPerson('Saheed', 'Engr.'));