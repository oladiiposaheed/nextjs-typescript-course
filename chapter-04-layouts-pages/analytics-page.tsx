// ==========================================
// Mini Project: Analytics Page

export default function AnalyticsPage() {
  return (
    <div className='max-w-6xl mx-auto space-y-8'>
      <div>
        <h1 className='text-3xl font-bold text-white'>Analytics</h1>
        <p className='text-zinc-400 mt-1'>Track your performance metrics over time.</p>
      </div>

      {/* Fake Chart Area */}
      <div className='p-6 rounded-2xl bg-zinc-900 border border-zinc-800 h-96 flex flex-col'>
        <h2 className='text-lg font-semibold text-white mb-6'>Traffic Overview</h2>
        
        {/* Visual bars */}
        <div className='flex-1 flex items-end gap-2'>
          {[40, 70, 45, 90, 65, 85, 100, 50, 75, 60, 80, 95].map((height, i) => (
            <div 
              key={i} 
              className='flex-1 bg-indigo-500/20 hover:bg-indigo-500/40 transition-colors rounded-t-sm'
              style={{ height: `${height}%` }}
            ></div>
          ))}
        </div>
        <div className='flex justify-between text-xs text-zinc-500 mt-4'>
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
        </div>
      </div>
    </div>
  );
}