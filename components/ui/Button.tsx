"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "gold" | "outline" | "ghost";
  withArrow?: boolean;
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  gold: "bg-ink text-cream hover:bg-gold-500 hover:text-cream",
  outline:
    "border border-ink/25 text-ink hover:border-gold-400 hover:text-gold-700",
  ghost: "text-ink-soft hover:text-gold-700",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "gold", withArrow, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide uppercase transition-all duration-300 cursor-pointer ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {children}
        {withArrow && (
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
