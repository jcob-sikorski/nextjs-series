// Note: parallel routes are an advanced routing mechanism 
//       that allows for the simulaneous rendering of 
//       multiple pages within the same layout
//       e.g. in dashboard we render at the same time user 
//       analytics, notifications and revenue metrics - 
//       each one being a separate component

// Note: users, revenue, notifications slots are available 
//       as slots and we don't need to import them

// Note: children prop is equivalent to the complex-dashboard/@children/page.tsx slot
//       - so technically we have four slots in the layout.tsx file

// Note: clear benefit of parallel routes is their ability to split layout into various slots,
//       making the code more manageable

// Note: the true benefit of parallel routes lies in their 
//       capacity of independent route handling and sub-navigation

// Note: independent route handling - meaning each slot in a 
//       layout can have its own loading and error states.
//       This granular control is particularly beneficial in scenarios 
//       where different sections of the page load at varying speeds 
//       or encounter unique errors. Such approach simplifies 
//       the debugging and maintanence.

// Note: each slot of the dashboard can function as mini-application, 
//       complete with its own navigation and state management.
//       e.g. users can have a button in notifications component 
//       which allows them to switch between default notifications 
//       component and archived notifications compnent.
//       this allows for navigating to various parts of the application 
//       without unnecessary page reloads

// import UserAnalytics from "@/components/UserAnalytics";
// import RevenueMetrics from "@/components/RevenueMetrics";
// import Notifications from "@/components/Notifications";

export default function DashboardLayout({
    children,
    users,
    revenue,
    notifications,
}: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
}) {

    // Note: below are passed slots as children
    return (
        // <>
        //     <div>{children}</div> {/* Component from page.tsx */}
        //     <UserAnalytics /> {/* Component for user analytics */}
        //     <RevenueMetrics /> {/* Component for revenue metrics */}
        //     <Notifications /> {/* Component for notifications */}
        // </>
        <div>
            <div>{children}</div>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
            </div>
        </div>
    );
}