"use client";

// Note: it isolates errors to affected segments while 
//       keeping the rest of the application functional

// Note: error.tsx wraps a route segment and its nested
//       children in a React Error Boundary

// Note: it creates error UI tailored to specific 
//       segments using the file-system hierarchy to adjust granularity

// Note: This is displayed instead of a component which trigerred an error.

// Note: you can also add functionality to attempt recover 
//       from the error without full page reload

// Note: errors bubble up to the closest parent error boundary

// Note:  by positioning error.tsx files at different levels in the 
//        nested folders of a route, you can achieve a more granular 
//        level of error handling


// Note: try again button will rerender the error boundary contents
//       meaning this error component will be replaced with content from page.tsx

export default function ErrorBoundary({ error, reset }: {
    error: Error;
    reset: () => void;
}) {
    // Note: clicking of the button will rerender the 
    //       component - so it will try to do the same operation again
    return <div>
        {error.message} 
        <button onClick={reset}>Try again</button>
        </div>;
}