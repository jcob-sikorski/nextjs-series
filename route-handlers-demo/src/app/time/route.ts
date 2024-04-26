// Note: if we want to opt out of caching then we 
//       can use somehting like dynamic mode in Segment Config Option


// Note: by default the mode of dynamic is auto which 
//       attempts to cache as much as possible.
//       Here we opt out of caching entirely.
export const dynamic = "force-dynamic";

// Note: we can also use the Request object or employing 
//       dynamic function like headers() and cookies() 
//       to opt out of caching or using any other 
//       HTTP method other than GET.

export async function GET() {
    return Response.json({
        time: new Date().toLocaleTimeString(), // Note: in production the time does not update - 
                                               //       it's cached because this is a default behavior 
                                               //       for GET methof with the Response object in NextJS
    });
}