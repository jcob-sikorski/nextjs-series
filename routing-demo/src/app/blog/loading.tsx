// Note: loading.tsx file allows us to create loading states 
//       that are displayed to users while a specific route 
//       segment's is loading

// Note: the loading state appears immediately upon navigation, 
//       giving users the assurace that the application is responsive 
//       and actively loading content

// Note: this file will automatically wrap the page.tsx file 
//       and all its nested children within a react suspends boundary

// Note: this file reassures users that their reaction has 
//       been acknowledged, reduces perceived times, and 
//       makes the application feel more responsive

// Note: NextJS allows the creation of shared layouts 
//       that remain interactive while new route segments are loading

// Note: users can continue interacting with ceratin parts of the application. 
//       such as navigation menu or sidebar, even if the main 
//       content is still being loaded

export default function Loading() {
    return <h1>Loading</h1>;
}