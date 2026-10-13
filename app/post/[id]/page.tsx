import Link from "next/link";

// posts data
const posts: Record<string, { title: string; body: string }> = {
    '1': { title: 'First Post', body: 'This is my first blog post.' },
    '2': { title: 'Second Post', body: 'Another interesting post.' },
    '3': { title: 'Third Post', body: 'Learning Next.js is fun!' },
};

export default async function PostPage({
    params
}: PageProps<'/post/[id]'>) {
    const { id } = await params;
    const post = posts[id];

    // If post not exist
    if (!post) {
        return (
            <div className="p-8">
                <h1 className="text-3xl font-bold mb-4">Post not found</h1>
                <Link href='/' className="text-blue-600">
                    ← Back to Home
            </Link>
        </div>
        );
    }

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-600 mb-6">{post.body}</p>
            <Link href='/' className="text-blue-600">
                ← Back to Home
            </Link>
        </div>
    )
}
