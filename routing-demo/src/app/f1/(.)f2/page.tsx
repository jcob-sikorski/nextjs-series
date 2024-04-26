// Note: App router in NextJS introduced two types of routes:
//       parallel routes and intercepting routes.

// Note: Intercepting routes allow you to intercept or stop 
//       the default routing behaviour to present an alternate 
//       view or component when navigating through the UI, 
//       while still preserving the intended route for scenarios 
//       like page reloads. 

// Note: This can be useful if you want to 
//       show a route while keeping the context of the current page.
//       e.g we can display the login modal instead on top of the 
//       previous contents while the URL is /login route. 
//       If reloaded we only see the login modal.
//       This ensures that the link remains shareable.
//       or e.g. clicking on a photo will navigate users to 
//       the nw page dedicated to that image.
//       so first on /photos/[id] we see a modal on top of the contents. 
//       but if reload we only see that modal with the photo.

// Note: we see the intercepted (.) f2 when we click on the link from f1.
//       However when we reload we see the f2.

// Note: (.)x matches the x at the same level.
//       (..)x matches the x level above.

export default function InterceptedF2() {
    return <h1>(.) Intercepted F2 page</h1>;
}