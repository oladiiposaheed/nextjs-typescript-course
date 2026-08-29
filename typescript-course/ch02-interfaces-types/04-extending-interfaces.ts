// 04-extending-interfaces.ts
// Interface inheritance with extends

interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    salary: number;
    departmeent: string;   
}

const emp: Employee = {
    name: 'Hawwa',
    age: 33,
    salary: 500000,
    departmeent: 'Engineering'
}

console.log(emp.name + ' words in ' + emp.departmeent);
console.log('Salart: $' + emp.salary);