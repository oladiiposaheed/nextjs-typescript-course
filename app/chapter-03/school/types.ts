// ScholarHub — Types

export interface Student {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    photo: string;
    class: string;
    age: number;
    gender: 'Male' | 'Female';
}