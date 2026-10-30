import { success } from "zod";

export async function POST(request) {
    
    const body = await request.json();

    const { title, completed } = body;

    return Response.json({
        success: true,
        message: 'Todo list successfully created',
        todo: {
            title,
            completed
        }
    })
}