"use client";

// Note: we use client because we want to use a 
//       hook which can only be used inside client components 

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css"; // Note: to apply the styles (if we don't use globals.css)

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

    return ( // Note: render the link component for each item
        <div>
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
        </div>
    )
}