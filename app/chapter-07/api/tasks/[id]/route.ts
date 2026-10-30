import { NextResponse } from 'next/server';
import { tasks } from '../data'; 

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const taskIndex = tasks.findIndex((t) => t.id === Number(id));

    if (taskIndex === -1) {
        return NextResponse.json(
            { error: 'Task not found' },
            { status: 404 }
        );
    }

    tasks.splice(taskIndex, 1);

    return NextResponse.json(
        { message: 'Task deleted successfully' }
    );
}