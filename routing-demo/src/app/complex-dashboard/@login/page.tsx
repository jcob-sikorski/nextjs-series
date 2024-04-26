// Note: parallel routes offer a wau to implement conditional routing
//       e.g. based on the user's authentication state we can choose 
//       to render a dashboard for authenticated users or a login page 
//       for those who are not authenticated. This is powerful because 
//       it enables fully separate code in the sae URL.

// Note: this login slot also benefits from independent error and loading 
//       states as will as sub-navigation to a possible signup or
//       forgot-password route.

import Card from "@/components/card";

export default function Login() {
    return <Card>Please login to continue</Card>;
}