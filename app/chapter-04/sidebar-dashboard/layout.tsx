
'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();  // get current url

    // Define our menu items
    const menuItems = [
        { name: 'Overview', href: '/chapter-04/sidebar-dashboard' },
        { name: 'Analytics', href: '/chapter-04/sidebar-dashboard/analytics' },
        { name: 'Settings', href: '/chapter-04/sidebar-dashboard/settings' },
    ];
    return (
        <div className="flex h-screen bg-zinc-950 text-white">

            {/* LEFT SIDE: SIDEBAR */}
            <aside className='w-64 bg-zinc-900 border-r border-zinc-800 p-4 flex flex-col'>
                <h1 className='text-xl font-bold mb-8'>My App</h1>
                
                {/* Loop through the menu items */}
                <nav className='flex flex-col gap-2'>
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`px-4 py-2 rounded-lg transition-colors ${
                                    isActive
                                    ? 'bg-indigo-600 text-white font-semibold' 
                                    : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                                }`}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>
            </aside>

            {/* RIGHT SIDE: HEADER + CONTENT */}
            <div className='flex-1 flex flex-col'>
                                {/* Top Header */}
                <header className='h-16 bg-zinc-900/50 backdrop-blur-md border-b border-zinc-800 flex items-center justify-between px-6 sticky top-0 z-10'>
                    
                    {/* Left Side: Search Bar */}
                    <div className='flex items-center text-zinc-500'>
                        <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                        </svg>
                        <input 
                            type='text' 
                            placeholder='Search...' 
                            className='bg-transparent border-none focus:outline-none text-sm placeholder:text-zinc-600 text-white w-64'
                        />
                    </div>

                    {/* Right Side: User Profile */}
                    <div className='flex items-center gap-4'>
                        <button className='text-zinc-400 hover:text-white transition-colors'>
                            🔔
                        </button>
                        
                        <div className='h-6 w-px bg-zinc-800'></div>
                        
                        <div className='flex items-center gap-3'>
                            <div className='w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold text-white'>
                                JD
                            </div>
                            <span className='text-sm font-medium text-zinc-300'>John Doe</span>
                        </div>
                    </div>

                </header>

                <main className='flex-1 p-8 overflow-y-auto'>
                    {children}
                </main>
            </div>
        </div>
    );
}