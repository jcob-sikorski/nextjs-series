import { Metadata } from "next";


// Note: Blog | Codevolution - using 
//       template field in root Metadata
export const metadata: Metadata = {
    // title: "Blog",
    title: {
        absolute: "Blog", // Note: the template has been ignored
    }
};

export default function Blog() {
    return <h1>My Blog</h1>;
}