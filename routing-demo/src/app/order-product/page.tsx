"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();

    const handleClick = () => {
        console.log("Placing your order");
        // router.push("/"); // Note: navigate back to the home page
        // router.replace("/"); // Note: if we want to replace the navigation 
        //                      //       history instead of pushing the route 
        //                      //       onto the stack
        // router.back();   // Note: navigate back to the router's history stack
        router.forward();   // Note: navigate forward to the next page
    }

    // Note: <> means React fragment
    return <>
            <h1>Order product</h1>
            <button onClick={handleClick}>Place order</button>
        </>;
}