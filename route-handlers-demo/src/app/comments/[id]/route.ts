// Note: square brackets work the same as in the pages.
//       Meaning we can extract the paramter from the URL.

import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(
    _request: Request, // Note: since we don't use the request we can prefix it with "_"
    { params }: { params: {id: string} }
) {
    if ( parseInt(params.id) > comments.length) {
        redirect("/comments"); // Note: this will also return 307 indicating a redirect
    }
    const comment = comments.find( 
       (comment) => comment.id === parseInt(params.id)
    );
    return Response.json(comment);
}

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    const body = await request.json();
    const { text } = body;
    const index = comments.findIndex(
        comment => comment.id == parseInt(params.id)
    );
    comments[index].text = text;

    return Response.json(comments[index]);
}

export async function DELETE(
    request: Request,
    { params }: { params: {id: string} }
) {
    const index = comments.findIndex(
        (comment) => comment.id == parseInt(params.id)
    );
    const deletedComment = comments[index];
    comments.splice(index, 1); // Note: remove an item at the given index -
                               //       counter one.

    return Response.json(deletedComment);
}