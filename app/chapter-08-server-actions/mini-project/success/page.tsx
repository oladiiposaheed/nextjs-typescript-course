import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="p-8 max-w-md mx-auto text-center mt-20">
      
      {/* Success Icon */}
      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
        ✓
      </div>

      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        Message Sent!
      </h1>
      
      <p className="text-gray-500 mb-8">
        Thank you for reaching out. We have received your message and will get back to you shortly.
      </p>

      <Link 
        href="/chapter-08-server-actions/mini-project"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Send Another Message
      </Link>
      
    </div>
  );
}