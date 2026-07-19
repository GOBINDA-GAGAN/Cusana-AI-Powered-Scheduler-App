import React from "react";
import {
    LayoutDashboard,
    Link2,
    CalendarClock,
    Sparkles,
    LogOut,
} from "lucide-react";
import Button from "./ui/Buttton";
import { Link, NavLink } from "react-router-dom";

const navItems = [
    {
        label: "Dashboard",
        path: "/dashbord",
        icon: LayoutDashboard,
    },
    {
        label: "Social Accounts",
        path: "/accounts",
        icon: Link2,
    },
    {
        label: "Schedule Posts",
        path: "/schedule",
        icon: CalendarClock,
    },
    {
        label: "AI Composer",
        path: "/ai-composer",
        icon: Sparkles,
    },
];

export default function SidebarLayout({ isOpen, setisOpen }) {



    return (
        <div className="min-h-screen bg-background text-foreground lg:flex">
            <aside
                className={`border-r border-border w-57.5 bg-card transition-all duration-300  ${isOpen ? "hidden" : "visible"}`} >
                <div className="flex h-screen flex-col">
                    <div className="flex items-center justify-between  bg-surface px-4 h-16 border-b">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-background shadow-[var(--shadow-md)]">
                                <span className="text-2xl">✱</span>
                            </div>

                            <span className="text-xl font-bold text-foreground">
                                Cusana
                            </span>
                        </Link>
                    </div>

                    <nav className="mt-4 flex-1 flex-col flex space-y-2 px-3">
                        {navItems.map((item) => {
                            const Icon = item.icon;

                            return (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all duration-300 ${isActive
                                            ? "bg-primary text-secondary transition-all duration-300"
                                            : "text-foreground hover:bg-secondary"
                                        }`
                                    }
                                >
                                    <Icon size={18} />
                                    <span>{item.label}</span>
                                </NavLink>
                            );
                        })}
                    </nav>

                    <div className="space-y-3 border-t border-border p-3">
                        <div className="flex items-center gap-3 rounded-2xl bg-surface p-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-background">
                                G
                            </div>

                            <div className="min-w-0">
                                <p className="truncate text-sm font-medium text-heading">
                                    Gobinda Dey
                                </p>
                                <p className="truncate text-xs text-muted">
                                    gobinda@example.com
                                </p>
                            </div>

                        </div>

                        <Button variant="danger" className="w-full">
                            <LogOut size={18} />
                            <span>Logout</span>
                        </Button>
                    </div>
                </div>
            </aside>
        </div >
    );
}