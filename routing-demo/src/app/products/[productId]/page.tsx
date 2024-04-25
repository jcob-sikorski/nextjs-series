// Note: dynamic route component which displays the text details about the product
// route is /products/N - where N can be whatever number; where N is productId

// Note: params are from the url

// Note: there is a ts error so we need to specify the type of params
// export default function ProductDetails( { params } ) {
export default function ProductDetails( { 
    params,
}: {
    params: { productId: string } // Note: params is the object with the key productId of type string
}) {
    return ( // Note: params.productId map to the N in /products/N; where N is productId
        <>
            <h1>Details about the product {params.productId}</h1>
        </>
    )
}