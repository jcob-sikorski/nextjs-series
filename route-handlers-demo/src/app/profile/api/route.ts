// Note: be mindful of potential conflicts between the 
//       route handlers and page routes.

// Note: route.ts will handle the reuqest by default 
//       instead of page.tsx. To fix the behavior 
//       described above move the route to the api subfolder.
//       So that page.tsx and route.tsx are not at the same level.
//       To get the response from this API we have to go 
//       to the /profile/api

import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers)
    const headerList = headers();

    cookies().set("resultsPerPage", "20"); // Note: another way to set a cookie instead
                                           //       of returning it as "Set-Cookie" header

    const theme = request.cookies.get("theme"); // Note: after cookie is set the browser will 
                                                //       send it always with the request and 
                                                //       this is how we can read it

    console.log(requestHeaders.get("Authorization"));
    console.log(headerList.get("Authorization"));

    console.log(theme);
    console.log(cookies().get("resultsPerPage"));

    return new Response("<h1>Profile API data</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark", // Note: Set cookie to the theme=dark when the 
                                        //       request to this route is made
        }
    });
}