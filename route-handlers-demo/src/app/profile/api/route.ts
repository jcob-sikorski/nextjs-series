// Note: be mindful of potential conflicts between the 
//       route handlers and page routes.

// Note: route.ts will handle the reuqest by default 
//       instead of page.tsx. To fix the behavior 
//       described above move the route to the api subfolder.
//       So that page.tsx and route.tsx are not at the same level.
//       To get the response from this API we have to go 
//       to the /profile/api

export async function GET() {
    return new Response("Profile API data");
}