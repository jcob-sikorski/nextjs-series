"use client";

// Note: we use client because we want to use a 
//       hook which can only be used inside client components 

// Note: templates are similar to layouts in that they 
//       wrap each child layout or page
//       But, with templates. when a user navigates 
//       between routes that share a template,
//       a new instance of the component is mounter, 
//       DOM elements are recreated, state
//       is not preserved, and effects are re-synchronized.
// Note: A template can be defined by exporting a default React component from a
//       template.js or template.tsx file
// Note: similar to layouts, templates also should accept a children 
//       prop which will render the nested segments in the route
// Note: to make a change from template to layout we just need to 
//       rename the layout.tsx to template.tsx

// Note: it is possible to include both files: layout.tsx and template.tsx. 
//       In such scenario layout renders first and then layout's children 
//       is replaced by a components exported from the template file

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css"; // Note: to apply the styles (if we don't use globals.css)
import { useState } from "react";

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname(); // Note: it represents /login in login page, etc.
    const [input, setInput] = useState("");

    return ( // Note: render the link component for each item
        <div>
            <div>
                <input value={input} onChange={(e) => setInput(e.target.value)}/>
            </div>
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                
                // Note: we don't see any styles because we delted the globals.css file
                //       so in (auth) folder we'll define the styles.css
                return (
                    <Link href={link.href} key={link.name}
                        className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
                    >
                        {link.name}
                    </Link>
                );
            })}
            {children}
        </div>
    )
}