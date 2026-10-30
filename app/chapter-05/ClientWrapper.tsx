'use client';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='p-6 border-2 border-blue-500 rounded-xl bg-zinc-900 mb-6'>
      <h2 className='text-blue-400 font-bold mb-4'>🔵 I am a Client Component</h2>
      
      <button 
        onClick={() => alert('Client interactivity!')}
        className='bg-blue-600 text-white px-4 py-2 rounded-lg text-sm mb-6 hover:bg-blue-500'
      >
        Click Me (Interactive)
      </button>
      
      {/* The Magic: We render the children here */}
      <div className='p-4 bg-zinc-950 border border-zinc-800 rounded-lg'>
        {children}
      </div>
    </div>
  );
}