import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
    const tagSecret = request.nextUrl.searchParams.get("secret");

    if (tagSecret !== process.env.MY_SECRET_TOKEN) {
        return new NextResponse(
            JSON.stringify({ message: "Invalid secret token" }),
            {
                status: 401,
                statusText: "Unauthorized",
                headers: {
                    "content-type": "application/json",
                },
            }
        );
    }

    const path = request.nextUrl.searchParams.get("path") || "/";
    revalidatePath(path);
    // revalidateTag(tagSecret);
    return NextResponse.json({ revalidated: true, now: Date.now() });
}
