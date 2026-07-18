import React from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col lg:flex-row">
                {/* Left side */}
                <div className="flex w-full flex-1 items-center justify-center px-6 py-10 lg:px-10">
                    <div className="w-full max-w-md">
                        <div className="mb-8 flex justify-center">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-background shadow-[var(--shadow-md)]">
                                <span className="text-2xl">✱</span>
                            </div>
                        </div>

                        <div className="text-center">
                            <h1 className="text-3xl font-semibold tracking-tight text-heading">
                                Create your account
                            </h1>
                            <p className="mt-2 text-sm text-muted">
                                Fill in your details to create a new account.
                            </p>
                        </div>

                        <form className="mt-8 space-y-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-heading">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter first name"
                                        className="h-11 w-full rounded-md border border-border bg-card px-4 text-sm text-foreground outline-none transition placeholder:text-placeholder focus:border-primary"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-heading">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter last name"
                                        className="h-11 w-full rounded-md border border-border bg-card px-4 text-sm text-foreground outline-none transition placeholder:text-placeholder focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-heading">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter email address"
                                    className="h-11 w-full rounded-md border border-border bg-card px-4 text-sm text-foreground outline-none transition placeholder:text-placeholder focus:border-primary"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-heading">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter password"
                                        className="h-11 w-full rounded-md border border-border bg-card px-4 pr-11 text-sm text-foreground outline-none transition placeholder:text-placeholder focus:border-primary"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((v) => !v)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-heading">
                                    Confirm password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm password"
                                        className="h-11 w-full rounded-md border border-border bg-card px-4 pr-11 text-sm text-foreground outline-none transition placeholder:text-placeholder focus:border-primary"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword((v) => !v)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
                                    >
                                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="h-11 w-full rounded-md bg-primary text-sm font-medium text-background transition hover:bg-primary-hover"
                            >
                                Create account
                            </button>

                            <div className="flex items-center gap-4 py-1">
                                <div className="h-px flex-1 bg-border" />
                                <span className="text-xs text-muted">Or sign up with</span>
                                <div className="h-px flex-1 bg-border" />
                            </div>

                            <button
                                type="button"
                                className="flex h-11 w-full items-center justify-center gap-2 rounded-md border border-border bg-card text-sm font-medium text-foreground transition hover:bg-secondary"
                            >
                                <span className="text-lg text-red-500">G</span> Google
                            </button>

                            <p className="text-center text-sm text-muted">
                                Already have an account?{" "}
                                <Link to="/signin" className="font-semibold text-heading hover:underline">
                                    SignIn
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

                {/* Right side
        <div className="relative w-full overflow-hidden bg-surface px-6 py-8 lg:w-[45%] lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_35%),linear-gradient(180deg,_rgba(255,255,255,0.02),_rgba(255,255,255,0))]" />
          <div className="relative h-full rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="grid h-full grid-rows-[auto_1fr_auto] gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur-md">
                  <div className="mb-2 text-[11px] text-white/45">Fast onboarding</div>
                  <div className="text-2xl font-semibold tracking-tight">Simple</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur-md">
                  <div className="mb-2 text-[11px] text-white/45">Secure setup</div>
                  <div className="text-2xl font-semibold tracking-tight">Protected</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur-md">
                  <div className="mb-2 text-[11px] text-white/45">Team access</div>
                  <div className="text-2xl font-semibold tracking-tight">Ready</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur-md">
                  <div className="mb-2 text-[11px] text-white/45">Responsive UI</div>
                  <div className="text-2xl font-semibold tracking-tight">Clean</div>
                </div>
              </div>

              <div className="flex items-end">
                <div className="max-w-xl">
                  <h2 className="text-3xl font-semibold tracking-tight text-white">
                    Start your journey with Cusana
                  </h2>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/55">
                    Create an account and get access to a modern dashboard experience built for speed and clarity.
                  </p>

                  <div className="mt-8 flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 text-white/40">
                <span className="inline-flex h-3 w-3 rounded-full bg-white/70" />
                <span className="inline-flex h-2 w-2 rounded-full bg-white/20" />
                <span className="inline-flex h-2 w-2 rounded-full bg-white/20" />
              </div>
            </div>
          </div>
        </div> */}
            </div>
        </div>
    );
}