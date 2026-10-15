const siteName: string = 'Dashly';
const version: number = 1;
const pages: string[] = ['Home', 'About', 'Contact'];

export default function HomePage() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">
                {siteName} v{version}
            </h1>

            <p className="text-gray-600 mb-4">
                Pages in this app:
            </p>

            <ul className="list-disc pl-6"> 
                {pages.map((page) => (
                    <li key={page}>{page}</li>
                ))}
            </ul>
        </div>
    )
}