// Note: this is route.ts - NextJS to create a route handler

// Note: unlike page routes which response with HTML content, 
//       route handlers allow you to create RESTful endpoints, 
//       giving you full control over the response. We can 
//       perform CRUD operations with the database except 
//       there is no overhead of having to create and configure 
//       a separate server - nextJS provide everything 
//       you need out of the box. Route handlers are also 
//       great for making external API requests.

// Note: route handlers run on server-side, ensuring that 
//       sensitive information like private keys remain 
//       secure and never get shipped to the browser.

// Note: route handlers are quivalent of API 
//       routes in page router.

// Note: the function name matching an HTTP 
//       word is convention we must follow.

// Note: going to the /hello we trigger this function 
//       which returns the response to the browser.

// Note: similar to page routes - route handlers can be organized 
//       into folders and subfolders ensuring cleaner organization 
//       and easier management of routes.

export async function GET() {
    // Note: this is standard Javascript reponse object to respond to an incoming request.
    //       we return a new response with the text "Hello world."
    return new Response("Hello world.");
}