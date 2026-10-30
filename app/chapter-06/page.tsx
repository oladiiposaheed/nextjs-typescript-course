// Server Component

export default async function ChapterSixPage() {
  // using the DEFAULT cache here
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1',
    {
        cache: 'no-store'
    }
  );
  const post = await response.json();

  // This captures the time the server ran this code
  const serverTime = new Date().toLocaleTimeString();

  return (
    <div className='p-8 max-w-2xl mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Caching Demo</h1>
      
      <div className='p-4 border rounded-lg bg-zinc-900 text-white'>
        <p className='text-sm text-zinc-400 mb-2'>Server loaded this at:</p>
        <h2 className='text-3xl font-mono text-emerald-400'>{serverTime}</h2>
      </div>

      <div className='mt-6'>
        <h3 className='font-bold text-xl'>{post.title}</h3>
        <p className='text-gray-600 mt-2'>{post.body}</p>
      </div>
    </div>
  );
}