import { Metadata } from "next";

// Note: Dynamic metadata depends on dynamic information such 
//       as current route parameters, external data or metadata in parent segments

// Note: to define dynamic metadata we export a generate metadata 
//       function which returns the metadata object from a layout.tsx or page.tsx

// Note: you cannot export both the metadata object and the 
//       generateMetadata function from the same route segment

type Props = {
    params: {
        productId: string;
    };
};

export const generateMetadata =  async({ 
    params
}: Props):Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`) // Note: we can also implement some 
                                                  //       getTitleById function which 
                                                  //       makes API call
        }, 100)
    });

    return {
        title: `Product ${title}`
    };
};

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