"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();

    const handleClick = () => {
        console.log("Placing your order");
        router.push("/"); // Note: navigate back to the home page
    }

    // Note: <> means React fragment
    return <>
            <h1>Order product</h1>
            <button onClick={handleClick}>Place order</button>
        </>;
}