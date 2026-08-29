// 08-use-case-payment.ts
// Real-life: Payment processing with overloading

// Define the result shape (what payment returns)
type PaymentResult = {
    success: boolean;   // did payment succeed? true or false
    receipt: string;  // unique receipt ID
};

// Overload 1: Pass only amount (currency defaults to USD)
function processPayment(amount: number): PaymentResult;

// Overload 2: Pass amount and currency
function processPayment(amount: number, currency: string): PaymentResult;

// Overload 3: Pass multiple amounts (array) - process in bulk
function processPayment(amounts: number[]): PaymentResult[];

// Implementation (actual logic)
// The '?' means currency is optional
function processPayment(
    amount: number | number[],    // can be one number or array of numbers
    currency?: string             // optional currency
): PaymentResult | PaymentResult[] {

    // Check if amount is an array
    if (Array.isArray(amount)) {
        // process each amount
        return amount.map(amt => {
            return {
                success: true,        // payment succeeded
                receipt: 'RCP-' + amt + '-' + Date.now()    // create receipt for each
            };
        });
    }

     // If not an array, it's a single number
     const paymentCurrency = currency || 'USD';   // default to USD
     const receiptId = 'RCP-' + Date.now();   // unique receipt ID

     return {
        success: true,          // payment succeeded
        receipt: receiptId     // return receipt
     };
}

// Test 1: Single amount (uses default USD)
const pay1 = processPayment(100);
// pay1 is PaymentResult (single object)
console.log('Single payment: ' + pay1.receipt);

// Test 2: Single amount with currency
const pay2 = processPayment(100, 'NGN');
// pay2 is PaymentResult (single object)
console.log('Payment in NGN: ' + pay2.receipt)

// Test 3: Multiple amounts (array)
const pay3 = processPayment([100, 200, 300]);
// pay3 is PaymentResult[] (array of objects)
pay3.forEach(result => {
    console.log('Bulk payment: ' + result.receipt);
});

