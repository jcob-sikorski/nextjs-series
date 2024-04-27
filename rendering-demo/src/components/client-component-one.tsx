"use client";

import { useState } from "react";
// import { ClientComponentTwo } from "./client-component-two";

// Note: server component can't be inside a client component because 
//       it will automatically become the client component. Also client 
//       components are rendered after server components we cannot import 
//       the server component module into client component module because 
//       it would require the request back to the server.

// import { ServerComponentOne } from "./server-component-one";

export const ClientComponentOne = ({ children }: {
    children: React.ReactNode
}) => {
    const [name, setName] = useState("Batman");

    return <>
        <h1>Client component one</h1>
        {children} {/* Note: here we  pass the server component as a child
                    prop to the client component.*/}
        {/* <ClientComponentTwo /> */}
        {/* <ServerComponentOne /> */}
    </>
}