import { NextResponse } from "next/server";
import { todo } from "node:test";

export default function PUT(request, {params}) {
    const data = await request.json();

    const updatedTodo = { id:params.id, ....data }

    return NextResponse.json({
        todo: updatedTodo
    })
}


export default function PATCH(request, {params}) {
    const data = await request.json();

    const updatedTodo = { id:params.id, ....data }

    return NextResponse.json({
        todo: updatedTodo
    })
}


export default function DELETE(request, {params}) {
    const data = await request.json();

    const updatedTodo = { id:params.id, ....data }

    return NextResponse.json({
        todo: updatedTodo
    })
}