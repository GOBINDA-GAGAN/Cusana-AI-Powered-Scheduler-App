import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Button from "./ui/Buttton";


export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="
        rounded-md
        border border-border
        bg-card
        p-5
        shadow-[0_25px_80px_rgba(0,0,0,0.08)]
      "
    >
      {/* Header */}

      <div className="text-center">
        <span className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-sm">
          👋 Welcome Back
        </span>

        <h1 className="mt-8 text-5xl font-black tracking-tight text-text">
          Sign In
        </h1>

        <p className="mt-4 text-lg leading-8 text-text-light">
          Continue where you left off.
        </p>
      </div>

      {/* Form */}

      <form className="mt-5 space-y-6">

        {/* Email */}

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Email Address
          </label>

          <input
            type="email"
            placeholder="john@example.com"
            className="
              h-10
              w-full
              rounded-md
              border border-border
              bg-background
              px-5
              outline-none
              transition-all
              placeholder:text-neutral-400
              focus:border-black
              focus:ring-4
              focus:ring-black/5
            "
          />
        </div>

        {/* Password */}

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••••"
              className="
                h-10
                w-full
                rounded-md
                border border-border
                bg-background
                px-5
                pr-14
                outline-none
                transition-all
                placeholder:text-neutral-400
                focus:border-black
                focus:ring-4
                focus:ring-black/5
              "
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
                absolute
                right-5
                top-1/2
                -translate-y-1/2
                text-neutral-500
                transition
                hover:text-black
              "
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>
        </div>

        {/* Remember */}

        <div className="flex items-center justify-between">

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-border"
            />

            Remember me
          </label>

          <Link
            to="/forgot-password"
            className="text-sm font-medium transition hover:text-black"
          >
            Forgot Password?
          </Link>

        </div>

        {/* Login Button */}

        <Button className="group w-full py-4">
          Continue

          <ArrowRight
            size={18}
            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Button>

        {/* Divider */}

        <div className="flex items-center gap-4 py-2">
          <div className="h-px flex-1 bg-border" />

          <span className="text-sm text-text-light">
            OR
          </span>

          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Google */}

        <button
          type="button"
          className="
            flex
            h-14
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            border border-border
            bg-background
            font-medium
            transition-all
            hover:-translate-y-0.5
            hover:border-neutral-400
            hover:shadow-md
          "
        >
          <FcGoogle size={24} />

          Continue with Google
        </button>

      </form>

      {/* Footer */}

      <p className="mt-10 text-center text-sm text-text-light">
        Don't have an account?{" "}

        <Link
          to="/signup"
          className="font-semibold text-black hover:underline"
        >
          Create account
        </Link>
      </p>
    </div>
  );
}