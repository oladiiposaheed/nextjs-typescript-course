// 04-function-overloading.ts
// Function overloading - multiple ways to call

// Overload signatures
function formatValue(val: string): string;
function formatValue(val: number): string;
function formatValue(val: boolean): string;

// Implementation
function formatValue(val: string | number | boolean): string {
    if (typeof val === 'string') {
        return 'String: ' + val.toUpperCase();
    }

    if (typeof val === 'number') {
        return 'Number: $' + val.toFixed(2);
    }
    return 'Boolean: ' + (val ? 'Yes' : 'No');
}

console.log(formatValue('hello'));
console.log(formatValue(42));
console.log(formatValue(true));