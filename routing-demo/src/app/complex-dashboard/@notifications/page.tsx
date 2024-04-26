// Note: parallel routes are defined using a feature knows as slots.

// Note: Slots help structure our content in a modular fashion.
//       To define a slot, we use `@folder` naming convention.
//       Each slot is then passed as a prop to its corresponding 
//       layout.tsx file.

// Note: each slot is automatically passed to 
//       the layout.tsx file component as a prop -
//       which we can use then to structure our dashboard page.

// Note: slots are not route segments and do not affect url structure
//       e.g. when we go to complex-dashboard/users we'll see the users component

import Card from "@/components/card";
import Link from "next/link";

export default function Notifications() { // Note: we return the styled div
                                          //       component from components folder
    // return <div>Notifications</div>;
    // return <Card>Notifications</Card>;
    return(
        <Card>
            <div>Notifications</div>
            <Link href="/complex-dashboard/archived">Archived</Link>
        </Card>
    );
}