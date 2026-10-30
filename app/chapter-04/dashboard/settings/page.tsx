import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Settings | Next.js Course',
    description: 'Manage your dashboard settings.'
};

export default function SettingsPage() {
    return (
        <div>
            <h1 className="text-xl font-bold">Dashboard Settings</h1>
            <p>Change your settings here.</p>
        </div>
    );
}