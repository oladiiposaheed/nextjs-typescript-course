export default function SettingsPage() {
  return (
    <div className='max-w-3xl mx-auto space-y-8'>
      
      {/* Page Title */}
      <div>
        <h1 className='text-3xl font-bold text-white'>Settings</h1>
        <p className='text-zinc-400 mt-1'>Manage your account settings and preferences.</p>
      </div>

      {/* Section 1: Profile Information */}
      <div className='bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden'>
        <div className='p-6 border-b border-zinc-800'>
          <h2 className='text-lg font-semibold text-white'>Profile Information</h2>
          <p className='text-sm text-zinc-400 mt-1'>Update your account details.</p>
        </div>
        
        <div className='p-6 space-y-5'>
          {/* First & Last Name Grid */}
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium text-zinc-300 mb-2'>First Name</label>
              <input type='text' defaultValue='John' className='w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors' />
            </div>
            <div>
              <label className='block text-sm font-medium text-zinc-300 mb-2'>Last Name</label>
              <input type='text' defaultValue='Doe' className='w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors' />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className='block text-sm font-medium text-zinc-300 mb-2'>Email Address</label>
            <input type='email' defaultValue='john@acme.com' className='w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors' />
          </div>
        </div>
      </div>

      {/* Section 2: Notifications (Toggles) */}
      <div className='bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden'>
        <div className='p-6 border-b border-zinc-800'>
          <h2 className='text-lg font-semibold text-white'>Notifications</h2>
          <p className='text-sm text-zinc-400 mt-1'>Choose what you want to be notified about.</p>
        </div>
        
        <div className='p-6 space-y-6'>
          
          {/* Toggle 1 (ON) */}
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm font-medium text-white'>Email Notifications</p>
              <p className='text-sm text-zinc-500'>Receive emails about your account activity.</p>
            </div>
            {/* The Toggle UI */}
            <div className='w-11 h-6 bg-indigo-600 rounded-full relative cursor-pointer'>
              <div className='w-4 h-4 bg-white rounded-full absolute top-1 right-1'></div>
            </div>
          </div>

          {/* Toggle 2 (OFF) */}
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm font-medium text-white'>Marketing Emails</p>
              <p className='text-sm text-zinc-500'>Receive emails about new products and features.</p>
            </div>
            {/* The Toggle UI */}
            <div className='w-11 h-6 bg-zinc-700 rounded-full relative cursor-pointer'>
              <div className='w-4 h-4 bg-white rounded-full absolute top-1 left-1'></div>
            </div>
          </div>

        </div>
      </div>

      {/* Save Button */}
      <div className='flex justify-end'>
        <button className='bg-white text-black px-6 py-2.5 rounded-lg font-medium hover:bg-zinc-200 transition-colors'>
          Save Changes
        </button>
      </div>

    </div>
  );
}