// Note: this layout replaces the children prop root layout

// Note: approach of nested layouts allows us to create 
//       layouts that apply to only specific areas of our application

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
    children, // Note: this prop corresponds to the productId in the page.tsx
}: {
    children: React.ReactNode;
}) {
    const random = getRandomInt(2);

    if (random === 1) {
        throw new Error("Error loading product");
    }

    return ( // Note: the h2 can be a carousel of features products below the heading
        <>
            {children}
            <h2>Featured products</h2>
            {/* Carousel here */}
        </>
    );
}