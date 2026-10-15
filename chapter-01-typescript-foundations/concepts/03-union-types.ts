// ==========================================
// Concept 1.3: Union Types
// ==========================================
// A union type allows a value to be ONE OF several types.
// ==========================================

// ---- BASIC UNION ----
let id: string | number;

id = 101;
id = 'user-101'

// ---- LITERAL UNION ----
// Only these exact values are allowed
type Status = 'active' | 'inactive' | 'pending';

const userStatus: Status = 'active';

// ---- UNION IN OBJECTS ----
interface Payment {
    amount: number;
    method: 'card' | 'transfer' | 'ussd';
}

const payment1: Payment = {
    amount: 10000,
    method: 'card',
};

// ---- UNION IN FUNCTION PARAMS ----
function printId(value: string | number): void {
    console.log(`ID: ${value}`);
}

printId(101);
printId('user-101');

// ---- UNION IN RETURN TYPE ----
function getRole(isAdmin: boolean): 'admin' | 'user' {
    return isAdmin ? 'admin' : 'user';
}

console.log(id);
console.log(userStatus);
console.log(payment1);
console.log(getRole(true));
console.log(getRole(false));