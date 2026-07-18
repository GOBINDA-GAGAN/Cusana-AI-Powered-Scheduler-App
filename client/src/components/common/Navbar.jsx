import { Link, NavLink } from "react-router-dom";
import Button from "../ui/Buttton";


const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
];

export default function Navbar() {
    return (
        <header className="sticky top-4 z-50">
            <div className="mx-auto flex h-16  items-center justify-between   bg-card/80 p-2 backdrop-blur-xl">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-background shadow-[var(--shadow-md)]">
                        <span className="text-2xl">✱</span>
                    </div>

                    <span className="text-xl font-bold text-foreground">
                        Cusana
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `text-sm font-medium transition ${isActive
                                    ? "text-foreground"
                                    : "text-muted hover:text-foreground"
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Buttons */}
                {/* Buttons */}
                <div className="flex items-center gap-3">
                    <Link to="/signin">
                        <Button size="sm" variant="ghost">
                            Login
                        </Button>
                    </Link>

                    <Link to="/signup">
                        <Button size="sm">
                            Signup
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}