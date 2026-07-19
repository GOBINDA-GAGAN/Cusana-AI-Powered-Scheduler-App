import React from "react";
import { Eye, EyeOff, ChevronRight, Mail, Lock, Check } from "lucide-react";
import { Link } from "react-router-dom";

function Card({ title, value, delta, className = "" }) {
    return (
        <div
            className={`rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-md ${className}`}
        >
            <div className="mb-2 flex items-center justify-between text-[11px] text-white/45">
                <span>{title}</span>
                <ChevronRight size={14} />
            </div>
            <div className="text-2xl font-semibold tracking-tight text-white">{value}</div>
            <div className="mt-3 flex items-center gap-2 text-xs text-white/55">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/10">
                    <Check size={10} />
                </span>
                <span>{delta} this month</span>
            </div>
        </div>
    );
}

export default function LoginSplitPage() {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="mx-auto flex min-h-screen max-w-360 flex-col lg:flex-row">
                <div className="flex w-full flex-1 items-center justify-center px-6 py-10 lg:px-10">
                    <div className="w-full max-w-md">
                        <div className="mb-8 flex justify-center">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-background shadow-[var(--shadow-md)]">
                                <span className="text-2xl">✱</span>
                            </div>
                        </div>

                        <div className="text-center">
                            <h1 className="text-3xl font-semibold tracking-tight text-heading">
                                Welcome Back to Cusana
                            </h1>
                            <p className="mt-2 text-sm text-muted">
                                Enter your username and password to continue.
                            </p>
                        </div>

                        <form className="mt-8 space-y-5">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-heading">
                                    Email
                                </label>
                                <div className="relative">
                                    <Mail
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                                        size={16}
                                    />
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="h-11 w-full rounded-md border border-border bg-card pl-10 pr-4 text-sm text-foreground outline-none transition placeholder:text-placeholder focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-heading">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                                        size={16}
                                    />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className="h-11 w-full rounded-md border border-border bg-card pl-10 pr-11 text-sm text-foreground outline-none transition placeholder:text-placeholder focus:border-primary"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((v) => !v)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
                                    >
                                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center gap-2 text-muted">
                                    <input type="checkbox" className="h-4 w-4 rounded border-border" />
                                    Remember me
                                </label>
                                <a href="#" className="font-medium text-heading hover:underline">
                                    Forgot password
                                </a>
                            </div>

                            <button className="h-11 w-full rounded-md bg-primary text-sm font-medium text-background transition hover:bg-primary-hover">
                                Sign In
                            </button>

                            <div className="flex items-center gap-4 py-1">
                                <div className="h-px flex-1 bg-border" />
                                <span className="text-xs text-muted">Or login with</span>
                                <div className="h-px flex-1 bg-border" />
                            </div>

                            <div className="grid grid-cols-1 gap-3">
                                <button className="flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-card text-sm font-medium text-foreground transition hover:bg-secondary">
                                    <span className="text-lg text-red-500">G</span> Google
                                </button>
                            </div>

                            <p className="pt-2 text-center text-sm text-muted">
                                Don&apos;t have an account?{" "}

                                <Link to="/signup" className="font-semibold text-heading hover:underline">
                                    Register
                                </Link>
                            </p>
                        </form>

                        <div className="mt-16 flex items-center justify-between text-[11px] text-muted">
                            <span>© 2026 Cusana Inc. All rights reserved.</span>
                            <div className="flex gap-4">
                                <a href="#" className="hover:text-heading">
                                    Privacy Policy
                                </a>
                                <a href="#" className="hover:text-heading">
                                    Term & Condition
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}