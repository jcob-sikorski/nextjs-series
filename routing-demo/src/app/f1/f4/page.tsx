import Link from "next/link";

export default function F4() {
    return (
        <>
            <h1>F4 page</h1>
            <div>
                <Link href="/f1/f3">F3</Link>
                <Link href="/about">About</Link>
            </div>
        </>
    );
}

// Note: photo modal + feed example. Demo: when we open the /photos-feed 
//       we see the list of photos. When you click on the image modal 
//       pops open with a photo in card with description below it 
//       (in the background there is a feed). This is a prallel route 
//       which has been intercepted. The URL updates to the 
//       photo-feed/[photoId]. But the modal route is a parralel route which 
//       is rendered in the same layout and has a context of the photo-feed 
//       in the background. When we click on the previous page button in 
//       the browser it will close the modal - forward opens the modal.
//       When we reload the page the photo card opens in the layout 
//       instead of a modal. Same can be done with login page.