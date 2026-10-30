import Navbar from "../components/Navbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='p-4 border m-4 rounded'>
            <Navbar />

            <div className='p-4 border border-dashed border-gray-400'>
                {children}
            </div>
        </div>
    )
}