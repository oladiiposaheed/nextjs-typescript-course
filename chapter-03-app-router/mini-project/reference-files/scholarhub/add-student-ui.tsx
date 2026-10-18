// ==========================================
// Add Student Form 
// ==========================================

import Link from 'next/link';

export default function AddStudentPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 sm:p-8">
      
      {/* Back link */}
      <div className="max-w-2xl mx-auto mb-6">
        <Link
          href="/chapter-03/school/students"
          className="text-indigo-400 hover:underline"
        >
          ← Back to Students
        </Link>
      </div>

      {/* Form Card */}
      <div className="flex justify-center">
        <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 sm:p-8 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Add New Student
            </h1>
            <p className="text-indigo-100 text-sm mt-1">
              Fill in the details below
            </p>
          </div>

          {/* Form Body */}
          <div className="p-6 sm:p-8 space-y-5">
            
            {/* First Name & Last Name Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Fatimah"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Peace"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="e.g. fatimah@school.edu"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-indigo-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Class & Age Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Class
                </label>
                <select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:outline-none transition-colors appearance-none">
                  <option value="">Select Class</option>
                  <option value="JSS1">JSS1</option>
                  <option value="JSS2">JSS2</option>
                  <option value="JSS3">JSS3</option>
                  <option value="SS1">SS1</option>
                  <option value="SS2">SS2</option>
                  <option value="SS3">SS3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Age
                </label>
                <input
                  type="number"
                  placeholder="e.g. 16"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Gender
              </label>
              <div className="flex gap-4">
                {/* Male Option */}
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    className="w-4 h-4 text-indigo-600 bg-slate-950 border-slate-800 focus:ring-indigo-500 focus:ring-2"
                  />
                  <span className="text-gray-300">Male</span>
                </label>
                {/* Female Option */}
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    className="w-4 h-4 text-indigo-600 bg-slate-950 border-slate-800 focus:ring-indigo-500 focus:ring-2"
                  />
                  <span className="text-gray-300">Female</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/30"
              >
                Save Student
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}