import { NextRequest } from "next/server";
import { comments } from "./data";

// Note: this API route will return the json 
//       comprising of the array of comments.

// Note: in the real world application the UI would make the 
//       request to fetch the comments on page load or on click 
//       of the button.

// export async function GET() {
//     return Response.json(comments);
// }

// Note: in the context of NextJS the type we're actually dealing with 
//       is NextRequest. This object provides convenient methods 
//       for managing query parameters with ease.
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComments = query ?
    comments.filter(comment => comment.text.includes(query)) :
    comments

    return Response.json(filteredComments);
}

export async function POST(request: Request) {
    const comment = await request.json();
    const newComment = {
        id: comments.length + 1,
        text: comment.text
    }
    comments.push(newComment);

    return new Response(JSON.stringify(newComment), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201 // Note: this means resource creation
    });
}