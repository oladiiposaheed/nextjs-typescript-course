// 05-generic-interface.ts
// Generic interface

// Generic interface for API response
interface ApiResponse<T> {
    data: T;      // data can be any type
    status: number;     // HTTP status code
}

// Use with User data
interface UserData {
    id: number;
    name: string;
}

// Response containing User
const userResponse: ApiResponse<UserData> = {
    data: { id: 1, name: 'Hawwa' },
    status: 200
};

// Response containing string
const messageResponse: ApiResponse<string> = {
    data: 'Configured successfully',
    status: 200
};

console.log('User: ' + userResponse.data.name);
console.log('Status: ' + userResponse.status);
console.log('Message: ' + messageResponse.data)