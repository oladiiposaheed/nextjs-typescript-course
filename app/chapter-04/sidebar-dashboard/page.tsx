export default function OverviewPage() {
  return (
    <div className='max-w-6xl mx-auto'>
      
      {/* Page Title */}
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-white'>Overview</h1>
        <p className='text-zinc-400 mt-1'>Here is what is happening with your projects today.</p>
      </div>

      {/* 3-Column Grid for Stats */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        
        {/* Card 1: Revenue */}
        <div className='bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors'>
          <p className='text-sm font-medium text-zinc-400 mb-2'>Total Revenue</p>
          <h2 className='text-3xl font-bold text-white'>$45,231</h2>
          <p className='text-sm text-emerald-400 mt-4 flex items-center gap-1'>
            <span>↑ 12%</span> 
            <span className='text-zinc-500'>from last month</span>
          </p>
        </div>

        {/* Card 2: Subscriptions */}
        <div className='bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors'>
          <p className='text-sm font-medium text-zinc-400 mb-2'>Subscriptions</p>
          <h2 className='text-3xl font-bold text-white'>+2,350</h2>
          <p className='text-sm text-emerald-400 mt-4 flex items-center gap-1'>
            <span>↑ 18%</span> 
            <span className='text-zinc-500'>from last month</span>
          </p>
        </div>

        {/* Card 3: Active Now */}
        <div className='bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors'>
          <p className='text-sm font-medium text-zinc-400 mb-2'>Active Now</p>
          <h2 className='text-3xl font-bold text-white'>573</h2>
          <p className='text-sm text-zinc-500 mt-4 flex items-center gap-1'>
            <span className='text-emerald-400'>+201</span> since last hour
          </p>
        </div>

      </div>

    </div>
  );
}