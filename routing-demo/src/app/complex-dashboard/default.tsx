// Note: in the case of reload NextJS searches for default.tsx 
//       file within each unmatched slot. This file provides the 
//       default content that NextJS will render in the UI.
//
// Note: If default.tsx is missing in any of unmatched slots for the current route,
//       NextJS will render 404 error. e.g. navigating to the archived 
//       and performing a site reload will result in 404 because 
//       there is no default.tsx in the children: user or revenue slot.

// Note: default.tsx serves as a fallback to render content when 
//       the framework can't retireve a slot's active state from the current URL.

export default function DefaultComplexDashboardPage() {
    return <h1>Complex dashboard</h1>;
}