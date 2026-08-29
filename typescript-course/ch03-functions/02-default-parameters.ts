// 02-default-parameters.ts
// Default parameters with =

function createUser(uName: string, uAge: number = 10): string {
    return uName + ' is ' + uAge + ' years old';
}

function calculateDiscount(price: number, discount: number = 10): number {
    const discountAmount = (price * discount) / 100;
    return price -discountAmount;
}

console.log(createUser('Saheed'));
console.log(createUser('Hawwa', 30));
console.log('Price after discount: $' + calculateDiscount(100));
console.log('Price after 20% discount: $' + calculateDiscount(100, 20));
