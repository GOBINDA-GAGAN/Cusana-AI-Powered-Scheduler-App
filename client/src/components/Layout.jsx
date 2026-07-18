import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./common/Header";
import { useState } from "react";


const pageTitle = {
    "/dashbord": "Dashboard",
    "/accounts": "Social Accounts",
    "/schedule": "Schedule Posts",
    "/ai-composer": "AI Composer",
}

export default function DashboardLayout() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { pathname } = useLocation();
    const title = pageTitle[pathname]
    return (
        <div className="flex h-screen bg-background">

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <Sidebar
                isOpen={isMobileMenuOpen}
                setIsOpen={setIsMobileMenuOpen}
            />

            {/* Content */}
            <div className="flex flex-1 flex-col overflow-hidden">

                {/* Header */}
                <header className="sticky top-0 z-30 h-16 border-b border-border bg-background/80 backdrop-blur-xl">
                    <Header
                        title={title}
                        setIsOpen={setIsMobileMenuOpen}
                    />
                </header>

                {/* Main */}
                <main className="flex-1 overflow-y-auto p-6">
                    <Outlet />
                </main>

            </div>

        </div>
    );
}