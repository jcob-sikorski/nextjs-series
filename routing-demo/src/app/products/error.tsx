"use client";

// Note: when we move the error.tsx from products/[productId]/reviews/[reviewId] 
//       to the root of the route, the error component will 
//       replace all the components in the root route

// Note: the layout sits above the error boundary meaning 
//       all the errors in layout won't be catched

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