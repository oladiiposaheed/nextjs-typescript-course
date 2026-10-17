// Students List Page

import Link from "next/link";
import Image from "next/image";
import { students } from "../data";


export default function StudentsPage() {
    return (
        <div className="min-h-screen bg-slate-950 p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white mb-1">Students</h1>
                    <p className="text-gray-400">
                        {students.length} students enrolled
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {students.map((student) => (
                        <div
                            key={student.id}
                            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-slate-700 transition-all"
                        >
                            <Image 
                                src={student.photo}
                                alt={student.firstName}
                                width={96}
                                height={96}
                                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-slate-700 object-cover"
                            />

                            <h2 className="text-white font-bold text-lg">
                                {student.firstName} {student.lastName}
                            </h2>
                            <p className="text-gray-400 mb-4 text-sm">{student.email}</p>

                            <div className="flex justify-center gap-2 flex-wrap">
                                <span className="bg-indigo-950/50 text-indigo-300 text-xs font-medium px-3 py-1 rounded-full border border-indigo-900/50">
                                    {student.class}
                                </span>
                                <span className="bg-purple-950/50 text-purple-300 text-xs font-medium px-3 py-1 rounded-full border border-purple-900/50">
                                    Age {student.age}
                                </span>
                                <span
                                    className={`text-xs font-medium px-3 py-1 rounded-full border ${
                                        student.gender === 'Female'
                                        ? 'bg-pink-950/50 text-pink-300 border-pink-900/50'
                                        : 'bg-blue-950/50 text-blue-300 border-blue-900/50'
                                    }`}
                                >
                                    {student.gender}
                                </span>
                            </div>

                            <Link
                                href={`/chapter-03/school/students/${student.id}`}
                                className="mt-2 inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm"
                            >
                            View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}