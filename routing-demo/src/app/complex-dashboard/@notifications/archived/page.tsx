import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() { // Note: we return the styled div
                                          //       component from components folder
    // return <div>Notifications</div>;
    // return <Card>Notifications</Card>;
    return(
        <Card>
            <div>Archived Notifications</div>
            <Link href="/complex-dashboard">Default</Link>
        </Card>
    );
}

// Note: for default the content rendered wihtin a slot matches the current URL.
//       e.g when clicking on Archived link we navigate to the 
//       complex-dashboard/archived. User analytics and revenue metrics become unmatched.

// Note: in the case of navigation withing the UI, NextJS retains the 
//       previously active state of a slot regardless of changes in the URL.
//       meaning when we click e.g. on default button the user 
//       analytics and revenue metrics don't rerender.