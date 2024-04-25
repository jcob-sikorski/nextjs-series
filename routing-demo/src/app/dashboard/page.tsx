// Note: without exporting we encounter the error 
//       "this is not React component"
//       when there is not export default 
//       function somewhere else in this file

function BarChart() {
    return <h1>Bar chart</h1>
}

// Note: when we export this as default then this is 
//       returned to the user (showed)
export default function Dashboard() {
    return <h1>Dashboard</h1>
}