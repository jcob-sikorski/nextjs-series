// Note: server-side components can't interact with 
//       browser APIs or hanlde user interactivity.

// Note: Dynamic Rendering
//       Dynamic rendering is a server rendering strategy where 
//       routes are rendered for each user at request time
//       It is useful when a route has data that is personalized to 
//       the user or contains information that can only be known at 
//       request time, such as cookies or the URL's search parameters.

// Note: during rendering if a dynamic function is discovered 
//       (cookies, headers, searchParams) - nextjs will switch to dynamically
//       rendering the whole route.

// Note: As a developer, you do not need to choose between static and dynamic rendering.
//       Next.js will automatically choose the best rendering strategy for each route based
//       on the features and APIs used

// Note: Server components
//       - Fetching data
//       - Directly accessing backend resources
//       - Protecting sensitive information (like access tokens and API keys) on the
//       server
//       - Keeping large dependencies server-side, which helps in reducing 
//       client-side JavaScript.

// Note: Client components
//       - Adding interactivity
//       - Handling event listeners (such as onClick), onChange(), etc)
//       - Managing state and lifecycle effects (using hooks like useState(),
//       useReducer(), useEffect))
//       - Using browser-exclusive APIs
//       - Using custom hooks
//       - Using React Class components

// import { useState } from "react";
import { cookies } from "next/headers";

export default function AboutPage() {
    // const [name, setName] = useState(""); // Note: we'll see the error for this hook
    //                                       //       because there's no concept of the 
    //                                       //       state on the server because it 
    //                                       //       exists in the browser.
    const cookieStore = cookies();
    const theme = cookieStore.get("theme");
    console.log(theme);
    
    console.log("About server component");

    return <h1>About Page {new Date().toLocaleTimeString()}</h1>;
}

// Note: the drawback of CSR (client-side rendering) is that UX can suffer 
//       from slow load tine, as the browser has to download, parse and 
//       execute Javascript before the user sees any meaningful content.
//       That's why Nextjs pivoted to server-side solutions.

// Note: SSR (server-side rendering) when the request comes from the client
//       to the server - the server takes charge of rendering the full HTML 
//       (not the browser as is CSR). This fully formed HTML documemnt is 
//       then sent to the browser. Since the HTML is generated on the server 
//       the broswer is able to quickly parse and display it improving the 
//       initial page load time.

// Note: benefits of SSR:
//       1. it significanlty improves the SEO because search engines can 
//          easily index the server-rendered content.
//       2. users can immediately seethe page HTML content, 
//          instead of a blank screen or loading spinner.

// Note: the full interactivity of the page is on haul until the 
//       javascript bundle comprising javascript itself has been 
//       completely downloaded and executed by the browser. This 
//       important phase known as hydration is where the static 
//       HTML page initially served by the server is brought to life.

// Note: during hydration react takes control in the browser, 
//       recostructing component tree in memmory based on the 
//       static HTML that was served. It carefully plans the placement 
//       of interactive elements within that tree. Then, react proceeds 
//       to bind necessary Javascript lofic to these elements.
//       This involves initializing the application state, attaching 
//       event handlers for actions such as clicks and mouseovers, 
//       and setting up any other dynamic functionalities required 
//       for a fully interactive user experience.

// Note: server-side solutions can be categorized into two strategies:
//       1. Static Site Generation (SSG)
//       2. Server-Site Rendering (SSR)

// Note: SSG occurs at build time, when the application 
//       is deployed on the server. This results in pages that 
//       are already rendered and ready to serve. It is ideal 
//       for content that doesn't change often, like blog posts.

// Note: SSR, on the other hand, renders pages on-demand in 
//       response to user requests. It is suitable for 
//       personalized content like social media feeds, 
//       where the HTML depends on the logged-in user.

// Note: drawbacks of SSR:
//       1. You have to feech everything before you can show anything:
//       Components cannot start rendering and then pause or "wait" while data is still
//       being loaded.
//       If a component needs to fetch data from a database or another source (like an
//       API), this fetching must be completed before the server can begin rendering the
//       page. 
//       This can delay the server's response time to the browser, 
//       as the server must finish collecting all necessary data before 
//       any part of the page can be sent to the client

//       2. You have to load everything before you can hydrate anything:
//       For successful hydration, where React adds interactivity to 
//       the server-rendered HTML, the component tree in the browser 
//       must exactly match the server-generated component tree.
//       This means that all the JavaScript for the components must 
//       be loaded on the client before you can start hydrating any of them.

//       3. You have to hydrate everything before you can interact with anything:
//       React hydrates the component tree in a single pass,
//       meaning once it starts hydrating, it won't stop until 
//       it's finished with the entire tree. As a consequence, 
//       all components must be hydrated before you can 
//       interact with any of them.

// Note: Drawbacks of SSR - All or Nothing Waterfall
//       1. having to load the data for the entire page
//       2. load the JavaScript for the entire page, and
//       3. hydrate the entire page
//       create an "all or nothing" waterfall problem that spans 
//       from the server to the client, where each issue must be 
//       resolved before moving to the next one. This is inefficient 
//       if some parts of your app are slower than others, as is often 
//       the case in real-world apps.

// Note: the SSR drawbacks from above are the reason the Nextjs 
//       introduced the <Suspense> component to unlock two major SSR features:
//       1. HTML streaming on the server
//       2. Selective hydration on the client

// Note: to solve the problem 1 we wrap a react component in 
//       <Suspense fallback={<Spinner />}><Suspense/>
//       we instruct react not to wait for this component 
//       data to start streaming HTML for the rest of the page.
//       Instead react will send the spinner instead of the whole component.
//       When the component is ready with the data for that component, 
//       react sends additional HTML to ongoing stream accompanied by 
//       an-inline stream tag containing minimal javascript 
//       needed to correctly position that HTML.
//       As a result of this even if the full react library 
//       is not loaded on the client-side 
//       for that component the HTML is shown.

// Note: Until the javascipr for the component is loaded, 
//       client-side app hydration can't start.
//       And if the Javascript for the main section is large, 
//       this could significantly delay the process.
//       To mitigatie this code-splitting can be used.

// Note: code-splitting allows you to mark specific code 
//       segments as not inmediately necessary for loading, 
//       signalling your bundler to segregate them into 
//       separate `<script>` tags.

// Note: Using React.lazy for code splitting enables 
//       you to separate the main section's code from 
//       the primary JavaScript bundle. The JavaScript 
//       containing React and the code for the entire application, 
//       excluding the main section, can now be downloaded 
//       independently by the client, without having to 
//       wait for the main section's code.

// Note: from user's perspective first he sees non-interactive 
//       content that streams as HTML. Then we tell react to hydrate. 
//       The javascript code for the section with large javascript 
//       is not there yet, but this is okay, because we told 
//       other components to load independently.
//       Thanks to Selective Hydration, a heavy p[iece of Javascript 
//       doesn't prevent the rest of the page from becoming interactive.
//       This solves the third problem of SSR - we don;t have to 
//       wait for all the components to load their javascript.

// Note: React Server Components (RSC)
//       This approach aims to leverage the strengths of both server 
//       and client environments, optimizing for efficiency, 
//       load times, and interactivity.
//       The architecture introduces a dual-component model
//       - Client Components
//       - Server Components
//       This distinction is not based on the functionality 
//       of the components but rather on where they execute 
//       and the specific environments they are designed to interact with.

// Note: client components can rendered to HTML on the server (SSR), 
//       allowing users to immediately see the page's HTML 
//       rather than a blank screen.

// Note: Client Components have access to the client environment, 
//       such as the browser, allowing them to use state, effects, 
//       and event listeners to handle interactivity and also 
//       access browser-exclusive APIs like geolocation or localStorage, 
//       allowing you to build Ul for specific use cases.
//       In fact, the term "Client Component" doesn't signify 
//       anything new; it simply helps differentiate these 
//       components from the newly introduced Server Components.

// Note: Server Components represent a new type of React component 
//       specifically designed to operate exclusively on the server
//       And unlike client components, their code stays on the 
//       server and is never downloaded to the client
//       This design choice offers multiple benefits 
//       to React applications.

// Note: Benefits of Server Components
//       1. Reduced Bundle Sizes
//          Server Components do not send code to the client, 
//          allowing large dependencies to remain server-side.
//          This benefits users with slower internet connections 
//          or less capable devices by eliminating the need to download, 
//          parse, and execute JavaScript for these components.
//          Additionally, it removes the hydration step, 
//          speeding up app loading and interaction.

//       2. Direct Access to Server-side Resources
//          By having direct access to server-side resources 
//          like databases or file systems, Server Components 
//          enable efficient data fetching and rendering without 
//          needing additional client-side processing.
//          Leveraging the server's computational power and 
//          proximity to data sources, they manage compute-intensive 
//          rendering tasks and send only interactive pieces 
//          of code to the client.

//       3. Enhanced Security
//          Server Components' exclusive server-side execution 
//          enhances security by keeping sensitive data and logic, 
//          including tokens and API keys, away from the client-side.

//       4. Improved Data Fetching
//          Server Components enhance data fetching efficiency.
//          Typically, when fetching data on the client-side using useEffect, 
//          a child component cannot begin loading its data until the parent 
//          component has finished loading its own.
//          This sequential fetching of data often leads to poor performance.

//       5. Caching
//          Rendering on the server enables caching of the results, 
//          which can be reused in subsequent requests and across 
//          different users.
//          This approach can significantly improve performance reoduce 
//          costs by minimizing the amount of rendering and data fetching 
//          required for each request.

//        6. Faster Initial Page Load and First Contentful Paint
//           Initial Page Load and First Contentful Paint (FCP) 
//           are significantly improved with Server Components.
//           By generating HTML on the server, pages become immediately 
//           visible to users without the delay of downloading, 
//           parsing, and executing JavaScript.

//        7. Improved SEO
//           Regarding Search Engine Optimization (SEO), 
//           the server-rendered HTML is fully accessible to search 
//           engine bots, enhancing the indexability of your pages.

//        8. Efficient Streaming
//           Server Components allows the rendering process to be 
//           divided into manageable chunks, which are then streamed 
//           to the client as soon as they are ready.
//           This approach allows users to start seeing parts of the 
//           page earlier, eliminating the need to wait for the entire 
//           page to finish rendering on the server.

// Note: by default every component in NextJS app is considered a server component