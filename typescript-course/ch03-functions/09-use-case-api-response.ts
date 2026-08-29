// 09-use-case-api-response.ts
// Real-life: API response handler with overloading

// Success response shape
type ApiSuccess = {
    status: 'success';    // always 'success'
    data: unknown;        // any data returned
};

// Error response shape
type ApiError = {
    status: 'error';     // always 'error'
    message: string;      // error message
}

// Overload 1: If input is string, it's an error
function handleResponse(data: string): ApiError;

// Overload 2: If input is object, it's a success
function handleResponse(data: object): ApiSuccess;

// Implementation
// 'data' can be string OR object
function handleResponse(data: string | object): ApiSuccess | ApiError {

    // Check if data is a string (means error)
    if (typeof data == 'string') {
        // Return error response
        return {
            status: 'error',   // mark as error
            message: data     // the error message
        };
    }

    return {
        status: 'success',
        data: data
    }
}


// Test 1: Pass string (error case)
const errorResp = handleResponse('User not found!');
// TypeScript knows errorResp is ApiError
console.log('Error status: ' + errorResp.status);
console.log('Error message: ' + errorResp.message);

// Test 2: Pass object (success case)
const successResp = handleResponse({ id: 1, name: 'Hawwa' });
// TypeScript knows successResp is ApiSuccess
console.log('Success status: ' + successResp.status);
console.log('Success data: ' + JSON.stringify(successResp.data));
