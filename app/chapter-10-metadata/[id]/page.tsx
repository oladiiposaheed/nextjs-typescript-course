import { Metadata } from "next";

// 1. This function runs on the server before the page loads
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {

    // 2. Get the ID from the URL
    const { id } = await params;

    // 3. Simulate fetching the post title from a database
    const postTitle = id === '1' ? 'Learning Next.js' : 'Why I love Tailwind';

    // 4. Return the dynamic metadata
    return {
        title: `${postTitle} | My Blog`,
        description: `Read out title about ${postTitle}.`,
    };
} 

// 5. The actual Page
export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const postTitle = id === '1' ? 'Learning Next.js' : 'Why I love Tailwind';

    return (
    <div className="p-8 max-w-md">
      <h1 className="text-2xl font-bold mb-4">{postTitle}</h1>
      <p className="text-gray-600">This is the content of post #{id}.</p>
    </div>
  );
}