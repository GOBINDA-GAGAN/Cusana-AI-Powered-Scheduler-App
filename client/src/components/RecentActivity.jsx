import {
    CalendarCheck,
    Link2,
    Sparkles,
    Send,
} from "lucide-react";

const activities = [
    {
        id: 1,
        title: "AI generated a LinkedIn post",
        time: "2 min ago",
        icon: Sparkles,
    },
    {
        id: 2,
        title: "Post scheduled for tomorrow",
        time: "15 min ago",
        icon: CalendarCheck,
    },
    {
        id: 3,
        title: "Connected X account",
        time: "1 hour ago",
        icon: Link2,
    },
    {
        id: 4,
        title: "Published post to LinkedIn",
        time: "3 hours ago",
        icon: Send,
    },
];

export default function RecentActivity() {
    return (
        <div className="rounded-2xl border border-border bg-card p-6">

            <h2 className="text-lg font-semibold">
                Recent Activity
            </h2>
            <div>
                <p>{activities.length}</p>
            </div>

            <div className="mt-6 space-y-5">
                {activities.map((activity) => {
                    const Icon = activity.icon;

                    return (
                        <div
                            key={activity.id}
                            className="flex items-start gap-4 border-b  p-1"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                                <Icon size={18} />
                            </div>

                            <div className="flex-1">
                                <p className="font-medium">
                                    {activity.title}
                                </p>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    {activity.time}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}