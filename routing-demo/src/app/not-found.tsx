// Note: this file defines the not found page 
//       instead of default one provided by NextJS

// Note: it's a good idea to provide some branding for this page
export default function NotFound() {
    return (
        <div>
            <h2>Page not found</h2>
            <p>Could not find requested resource</p>
        </div>
    );
}