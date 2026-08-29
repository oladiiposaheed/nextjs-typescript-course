// 04-loop-mixed-array.ts
// Looping through mixed array

// Mixed array containing different types
const mixedItems: (string | number | boolean)[] = ['hello', 32, true, 'react', -12, false];

mixedItems.forEach(item => {
    if(typeof item === 'string') {
        console.log('String: ' + item.toUpperCase());
    } else if (typeof item === 'number') {
        console.log('Number: ' + item * 2);
    } else {
        console.log('Boolean: ' + item);
    }
});