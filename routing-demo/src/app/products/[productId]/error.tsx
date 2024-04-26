"use client";

// // Note: the error boundary sitting on the same level 
// //       as layout won't catch any errors in this layout.
// //       We have to wrap the layout in error boundary 
// //       at the parent level to catch its errors.

// export default function ErrorBoundary({ error, reset }: {
//     error: Error;
//     reset: () => void;
// }) {
//     // Note: clicking of the button will rerender the 
//     //       component - so it will try to do the same operation again
//     return <div>
//         {error.message} 
//         <button onClick={reset}>Try again</button>
//         </div>;
// }