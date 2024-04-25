// Note: ...slug - catch all segments route - accepts any segment where 
//       slug is the convention for naming the url - can be any word though

// Note: dynamic route component which displays the text
//       when user is on the route /docs/whatever1/whatever2/.../whateverN
// Note: catch all segment route is especially useful when we have many variations of the same url such as:
//          /product1/review1/user1, etc.
export default function Docs({ 
    params,
}: {
    params: {
        slug: string[]; // An array of slugs representing the URL path segments, e.g., ['/slug0', '/slug1', '/slug2']
    };
}) {
    // Note: We can write conditional statements to handle variations of the slug (the abbreviation for URL)
    if (params.slug?.length === 2) { // /featureId/conceptId
        return (
            <h1>
                Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
            </h1>
        );
    } else if (params.slug?.length === 1) { // /featureId
        return (
            <h1>
                Viewing docs for feature {params.slug[0]}
            </h1>
        );
    }
    // If no specific slug condition matches, return the Docs home page
    return <h1>Docs home page</h1>;
}

// Note: for the name of this folder [...slug] when we go to /docs there is 404 error
//       if we want to remove it (make the slug optional) then we have to do [[...slug]]
//       and make params.slug optinal with "?" -> params.slug?.sth