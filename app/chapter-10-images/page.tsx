import Image from "next/image";

export default function ImagePage() {
    return (
        <div className="p-8">

            <h1 className="text-2xl font-bold mb-4">Next.js Image Component</h1>
            <Image
                src='next.svg'
                alt="Next.js Logo"
                width={200}
                height={200}
                className="border p-4 rounded bg-white"
            />

            {/* External Image */}
            <Image 
                src='https://randomuser.me/api/portraits/women/44.jpg'
                alt="Random User"
                width={150}
                height={150}
                className="rounded-full border-4 border-gray-200"
            />
        </div>
    );
}