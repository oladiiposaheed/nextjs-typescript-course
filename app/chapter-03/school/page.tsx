import { students } from "./data";

export default function SchoolPage() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">ScholarHub</h1>
            <p>Total Students: {students.length}</p>
        </div>
    );
}