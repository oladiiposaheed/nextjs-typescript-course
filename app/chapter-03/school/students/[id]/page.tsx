// Student Detail Page

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { students } from "../../data";

export default async function StudentDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const student = students.find((s) => s.id === Number(id));

    // Student not found
    if (!student) {
        notFound();
    }

    // Student found
    return (
        <div className="min-h-screen bg-slate-950 p-6 sm:p-8">
            {/* Back link */}
            <div className="max-w-2xl mx-auto mb-6">
                <div className="max-w-2xl mx-auto mb-6">
                    <Link
                        href='/chapter-03/school/students'
                        className="text-indigo-400 hover:underline"
                    >
                        ← Back to Students
                    </Link>
                </div>
            </div>

            {/* Card — centered horizontally */}
            <div className="flex justify-center">
                <div className="w-full max-w-2xl bg-slate-900 border-slate-800 rounded-2xl shadow-2xl p-4 sm:p-8">
                    {/* Profile — centered */}
                    <div className="flex flex-col items-center text-center mb-8">
                        <Image 
                            src={student.photo}
                            alt={`${student.firstName} ${student.lastName}`}
                            width={128}
                            height={128}
                            className="w-32 h-32 rounded-full mb-4 border-4 border-slate-700 shadow-lg object-cover"
                        />
                        <h1 className="text-2xl sm:text-3xl font-bold text-white">
                            {student.firstName} {student.lastName}
                        </h1>
                        <p className="text-gray-400 text-sm mt-1">{student.email}</p>
                    </div>

                    {/* Info section */}
                    <div>
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4 text-center">
                            Student Infomation
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {/* Class */}
                            <div className="bg-indigo-950/50 border border-indigo-900/50 rounded-xl p-4 text-center">
                                <p className="text-xs text-indigo-400 font-medium uppercase mb-1">
                                    Class
                                </p>
                                <p className="text-xl font-bold text-indigo-200">
                                    {student.class}
                                </p>
                            </div>

                            {/* Age */}
                            <div className="bg-purple-950/50 border border-purple-900/50 rounded-xl p-4 text-center">
                                <p className="text-xs text-purple-400 font-medium uppercase mb-1">
                                Age
                                </p>
                                <p className="text-xl font-bold text-purple-200">
                                {student.age}
                                </p>
                            </div>

                            {/* Gender */}
                            <div
                                className={`rounded-xl p-4 text-center border ${
                                    student.gender === 'Female'
                                        ? 'bg-pink-950/50 border-pink-900/50'
                                        : 'bg-blue-950/50 border-blue-900/50'
                                }`}
                            >
                                <p
                                    className={`text-xs font-medium uppercase mb-1 ${
                                        student.gender === 'Female'
                                            ? 'text-pink-400'
                                            : 'text-blue-400'
                                    }`}
                                >
                                    Gender
                                </p>
                                <p
                                    className={`text-xl font-bold ${
                                        student.gender === 'Female'
                                            ? 'text-pink-200'
                                            : 'text-blue-200'
                                    }`}
                                >
                                    {student.gender}
                                </p>
                            </div>                            
                        </div>

                        {/* Student ID */}
                        <div className="mt-6 p-4 bg-slate-950 border border-slate-800 rounded-xl flex justify-between items-center">
                        <span className="text-sm text-gray-400">Student ID</span>
                        <span className="font-mono font-bold text-gray-200">
                            #{student.id}
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}