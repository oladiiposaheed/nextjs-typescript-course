// 03-rest-parameters.ts
// Rest parameters with ...

function sumAll(...numbers: number[]): number {
    let total = 0;
    for (const num of numbers) {
        total = total + num;
    }
    return total;
}

function joinWords(...words: string[]): string {
    return words.join(' ');
}

console.log('Sum of 1, 2, 3: ' + sumAll(1, 2, 3));
console.log('Sum of 10, 20, 30, 40: ' + sumAll(10, 20, 30, 40));
console.log('Sum of nothing: ' + sumAll());
console.log('Joined: ' + joinWords('Hello', 'TypeScript', 'World'));
