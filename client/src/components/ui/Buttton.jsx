import React from "react";
import clsx from "clsx";

const variants = {
  primary: `
    bg-gradient-to-b
    from-[#2b2b2b]
    via-[#1c1c1c]
    to-[#111111]
    text-white
    shadow-[0_3px_10px_rgba(0,0,0,0.35)]
    hover:-translate-y-0.5
    hover:shadow-[0_10px_22px_rgba(0,0,0,0.45)]
    active:translate-y-0
  `,

  secondary: `
    bg-white
    text-black
    border border-gray-200
    shadow-sm
    hover:bg-gray-100
  `,

  outline: `
    bg-transparent
    text-foreground
    border border-border
    hover:bg-secondary
  `,

  ghost: `
    bg-transparent
    text-foreground
    hover:bg-secondary
  `,

  danger: `
    bg-red-600
    text-white
    hover:bg-red-700
  `,
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-7 text-sm",
  lg: "h-12 px-8 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  className,
  ...props
}) {
  return ( 
    <button
      disabled={loading || disabled}
      className={clsx(
        "inline-flex items-center justify-center gap-2",
        "rounded-sm font-medium",
        "transition-all duration-300 ease-out",
        "focus:outline-none",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {loading && (
        <svg
          className="h-4 w-4 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="3"
            opacity=".2"
          />
          <path
            d="M22 12a10 10 0 0 1-10 10"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
      )}

      {children}
    </button>
  );
}