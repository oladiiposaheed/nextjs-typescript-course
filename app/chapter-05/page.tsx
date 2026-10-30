// Server Component (Top Bun)

import ClientWrapper from "./ClientWrapper";
import ServerData from "./ServerData";

export default function CompositionPage() {
    return (
        <div className="p-8 min-h-screen bg-zinc-950">
            <h1 className='text-2xl font-bold text-white mb-6'>Composition Pattern</h1>

            {/* 
                pass <ServerData /> as a child to <ClientWrapper />.
                Because we are doing it from this Server Component (page.tsx),
                ServerData remains a Server Component!
            */}

            <ClientWrapper>
                <ServerData />
            </ClientWrapper>
        </div>
    );
}