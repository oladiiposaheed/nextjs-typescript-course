import { NextResponse } from "next/server";

export async function GET(request: Request) {

    const url = new URL(request.url);
    const { searchParams } = url;

    const apiUrl = new URL('https://jsonplaceholder.typicode.com/todos');

    searchParams.forEach((value, key) => {
        apiUrl.searchParams.append(key, value);
    })

    const response = await fetch(apiUrl);
    const data = await response.json();

    return NextResponse.json(data)
}