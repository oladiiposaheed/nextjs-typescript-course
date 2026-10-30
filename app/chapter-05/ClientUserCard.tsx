'use client';
import Image from "next/image";

export default function ClientUserCard({
    name,
    role,
    avatar
}: {
    name: string;
    role: string;
    avatar: string;
}) {

    // A small helper to style the role badge
    const roleColor = role === 'Admin'
        ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
        : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';

    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-4 mb-4">
                <Image
                    src={avatar}
                    alt={name} 
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover border-2 border-zinc-800"    
                />
                <div>
                    <h2>{name}</h2>
                    <span
                        className={`inline-block px-2.5 py-1 text-xs font-bold rounded-full border mt-1 ${roleColor}`}
                    >
                        {role}
                    </span>
                </div>

                <button
                    onClick={() => alert(`Message sent to ${name}!`)}
                >
                    Send Message
                </button>
            </div>
        </div>
    );
}