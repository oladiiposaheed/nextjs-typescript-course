import { NextResponse } from "next/server";

export async function GET(request: Request) {

    const url = new URL(request.url);
    const {searchParams} = url;

    console.log(searchParams);

    const response = await fetch('https://jsonplaceholder.typicode.com/todos?query=deleteus&_limit=10');
    const data = await response.json();
    return NextResponse.json(
        {data: data}
    );
}