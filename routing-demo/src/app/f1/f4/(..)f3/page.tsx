// Note: (.)x matches the x at the same level.

//       (..)x matches the x level above -
//       meaning the f3.

//       (..)(..)x matches the x two levels 
//       above - it doesn't quite work.

//       (...) matches segments from the 
//       root app directory.


export default function InterceptedF3() {
    return <h1>(..) Intercepted F3 page</h1>;
}