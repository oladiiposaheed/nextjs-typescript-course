// 03-readonly-properties.ts
// Readonly properties cannot be changed

interface Product {
    readonly id: number;
    name: string;
    price: number;
}

const laptop: Product = {
    id: 1,
    name: 'FDell Laptop',
    price: 400,
};

// Can change name and price
laptop.name = 'HP Laptop';
laptop.price = 600;

// Cannot change id
// laptop.id = 2; // Error: Cannot assign to 'id' because it is a read-only property

console.log('Product: ' + laptop.name);
console.log('ID: ' + laptop.id);
console.log('Price: $' + laptop.price);