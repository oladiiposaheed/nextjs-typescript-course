'use client'
import { useEffect } from "react"

export default function DashboardTemplate({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        console.log('🟢 Template mounted! Navigation happened');
    }, []);

    return (
        <div className="p-4 border-2 border-green-500 rounded m-4 bg-green-50">
            <p className="text-green-700 text-sm font-bold mb-2">
                (Green Box = Template) I re-render on every navigation!
            </p>
            {children}
        </div>
    );
}