"use client"; // Note: we need this to click a "try again" 
              //       button and rerender this component

import { notFound } from "next/navigation";

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ReviewDetail({ params }: {
    params: {
        productId: string;
        reviewId: string;
    }
}) {
    // const random = getRandomInt(2);

    // if (random === 1) {
    //     throw new Error("Error loading review");
    // }

    if (parseInt(params.reviewId) > 1000) {
        notFound(); // Note: programmatically show the Not Found page
    } 
    return (
        <h1>
            Review {params.reviewId} for product {params.productId}
        </h1>
    )
}