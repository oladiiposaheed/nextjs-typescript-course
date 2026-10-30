import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: Request) {

    const headerList = await headers();

    const cookieStore = await cookies()

    const userAgent = headerList.get('user-agent');

    cookieStore.set('theme', 'dark');
    const theme = cookieStore.get('theme');
    console.log(theme)

    console.log(userAgent)

    return NextResponse.json('Hello world')
}