// Note: the folder with underscore "_" indicates that this 
//       folder won't be considered as the route - meaning we 
//       can hide implementation details here like some utility functions

// Note: private folders can be helpful in few different scenarios:
//       - separating UI logic from routing logic
//       - for consistently organizing internal files across a project
//       - for avoding potential naming conflicts with 
//         future NextJS file conventions

// Note: we can also use the "%5" instead of the "_" in 
//       the name of the folder because its URL encoded for of an "_"

export default function PrivateRoute() {
    return <h1>You cannot view this in the browser</h1>;
}