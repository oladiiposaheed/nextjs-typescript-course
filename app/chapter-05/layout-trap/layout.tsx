// Server Component

import ClientNavbar from "./ClientNavbar";

export default function GoodLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="p-4 border-4 border-emerald-500 rounded">

            {/* Only the Navbar is a Client Component */}
            <ClientNavbar />

            {/* The children (pages) remain Server Components */}
            <div className="p-4 bg-blue-200 rounded">
                {children}
            </div>
        </div>
    )
}