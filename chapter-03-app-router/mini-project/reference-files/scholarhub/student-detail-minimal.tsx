// Student Detail Page 

import { students } from "../../data";

export default async function StudentDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    // Find the student whose id matches
    const student = students.find((s) => s.id === Number(id));

    // If no student found
    if(!student) {
        return (
            <div className="p-8">
                <h1 className="text-2xl font-bold">Student not found</h1>
            </div>
        );
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">
                {student.firstName} {student.lastName}
            </h1>
            <p className="text-gray-600">{student.email}</p>
        </div>
    );
}