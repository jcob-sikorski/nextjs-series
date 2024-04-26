"use client"; // Note: this directive is allows to cross the boundary 
              // from server to client side and is what allows us to 
              // create client components.

// Note: we'll see the log message in the terminal as in the 
//       server component in the browser and a terminal. Plus - we'll see it 
//       twice because of react strict mode. Meaning it will execute 
//       once in the browser and once on the server to allow the user 
//       to immediately see the page's HTML content instead of a blank screen.
//       It's the optimization strategy that NextJS uses and 
//       is recommended by React.

import { useState } from "react";

export default function DashboardPage() {
    console.log("Dashboard client component")

    const [name, setName] = useState("Jacob");

    return (
        <div>
            <h1>Dashboard Page</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <p>Hello, {name}!</p>
        </div>
    );
}

// Note: Static Rendering
//       Static rendering is a server rendering strategy where 
//       we generate HTML pages at the time of building our application.
//       This approach allows the page to be built once, cached by a CDN, 
//       and served to the client almost instantly. This optimization also 
//       enables you to share the result of the rendering work among 
//       different users, resulting in a significant performance boost 
//       for your application.

// Note: static rendering is the default strategy in the app router.
//       Meaning all routes are automatically prepared at build time 
//       without additional setup.

// Note: prefetching is a technique used to preload a route 
//       before a user navigates to it. Routes are automatically 
//       prefetched when they becomae visible in the viewport 
//       or as it comes into view through scrolling.