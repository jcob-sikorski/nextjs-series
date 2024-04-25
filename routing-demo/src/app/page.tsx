// Note: maps to root of our domain

// Note: each route maps to the name of folder in app folder with page.tsx file
// this is the server-side component

// Note: if user enters the route which does not map to any folder
// in app then nextjs automatically displays the 404 error
export default function Home() {
    return <h1>Welcome Home!</h1>;
}