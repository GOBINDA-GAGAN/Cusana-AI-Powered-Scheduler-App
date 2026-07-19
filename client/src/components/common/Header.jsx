import {
    Bell,
    Menu,
    Moon,
    Search,
    Sun,
} from "lucide-react";

export default function Header({ setIsOpen, title }) {
   
    
    return (
        <header className="flex h-16 items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur-xl">

            {/* Left */}
            <div className="flex items-center gap-4">

                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="rounded-xl border border-border p-2 transition hover:bg-card md:hidden"
                >
                    <Menu size={20} />
                </button>

                <h1 className="text-xl font-bold tracking-tight">
                    {title}
                </h1>
                <p></p>

            </div>



        </header>
    );
}