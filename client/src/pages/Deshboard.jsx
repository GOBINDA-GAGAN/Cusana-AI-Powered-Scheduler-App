import { useState } from "react";
import {
    CalendarClock,
    Sparkles,
    Link2,
    FileText,
} from "lucide-react"
import StartCard from "../components/StartCard";
import RecentActivity from "../components/RecentActivity";
const Dashboard = () => {

    const [stats, setStats] = useState({
        scheduled: 0,
        published: 0,
        connectedAccount: 0,
    });
    const [activity, setActivity] = useState([]);
    ;

    const statsCards = [
        {
            label: "Scheduled Posts",
            value: "124",
            icon: CalendarClock,
            trend: "+12% this week",
        },
        {
            label: "AI Generated",
            value: "58",
            icon: Sparkles,
            trend: "+18% this month",
        },
        {
            label: "Connected Accounts",
            value: "6",
            icon: Link2,
            trend: "+2 new accounts",
        },
        {
            label: "Published",
            value: "892",
            icon: FileText,
            trend: "+35 today",
        },
    ];
    return (
        <div className="space-y-7">
            <div className="">
                <h1 className="text-2xl font-semibold text-heading">Welcome Back</h1>
                <p className="mt-2 text-sm text-muted">Welcome to your dashboard.</p>
            </div>

            <div className="grid grid-cols-4 gap-5 ">

                {statsCards.map((item) => (
                    <StartCard
                        key={item.label}
                        label={item.label}
                        value={item.value}
                        icon={item.icon}
                        trend={item.trend}
                    />
                ))}
            </div>

            <div>

                <RecentActivity />
            </div>





        </div>
    );
};

export default Dashboard;