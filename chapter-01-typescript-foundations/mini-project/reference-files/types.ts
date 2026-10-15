// ==========================================
// Types for User Directory
// ==========================================


export interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user' | 'guest';
    isActive: boolean;
}