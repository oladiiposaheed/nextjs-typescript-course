import { NextResponse } from 'next/server';
import { z } from 'zod';
import { tasks } from './data';

export async function GET() {
  return NextResponse.json(tasks);
}

export async function POST(request: Request) {
  const body = await request.json();

  const TaskSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters long'),
  });

  const result = TaskSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.issues },
      { status: 400 }
    );
  }

  const newTask = {
    id: Date.now(),
    title: result.data.title,
    completed: false,
  };

  tasks.push(newTask);

  return NextResponse.json(newTask, { status: 201 });
}