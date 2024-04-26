// Note: middleware allows us to specifyn paths where it will be active:
//       - custom matcher config
//       - conditonal statements

// Note: NextResponse and NextRequest extend standard response API
import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {

    // Note: we can also set cookies on the request to the /profile page
    const response = NextResponse.next();
    
    const themePreference = request.cookies.get("theme");
    if (!themePreference) {
        response.cookies.set("theme", "dark");
    }


    // Note: this is how we can set some custom header with a value
    
    // Note: Custom headers are useful for passing additional 
    //       information in reponses which can be leveraged by 
    //       client-side scripts for debugging purposes
    response.headers.set("custom-header", "custom-value");

    return response;
    // if (request.nextUrl.pathname === "/profile") {
        // return NextResponse.redirect(new URL("/hello", request.url));

        // Note: middleware also allows for URL rewrites 
        //       which is a useful tool for legacy URL support or SEO optimization
        // Note: e.g. this can navigate to different page and URL stays the same.
        // return NextResponse.rewrite(new URL("/hello", request.url));
    // }
    // return NextResponse.redirect(new URL("/", request.url));
}

// Note: method 1:

// Note: this specifies the matcher of the route this middleware applies to
// export const config = {
//     matcher: "/profile",
// }