import { ClientComponentOne } from "@/components/client-component-one";
import { ServerComponentOne } from "@/components/server-component-one";

// Note: As a workaround we can pass the server component 
//       as a prop to the client component. The common way to do this is
//       to use the children prop to create a slot in a client component.

export default function InterleavingPage() {
    return <>
        <h1>Interleaving page</h1>
        <ClientComponentOne>
            <ServerComponentOne /> {/* Note: passing the server component 
                                    as a child prop as the note above says. */}
        </ClientComponentOne>
    </>
}