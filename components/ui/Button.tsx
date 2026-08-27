"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "gold" | "outline" | "ghost";
  withArrow?: boolean;
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  gold: "bg-gold-400 text-charcoal-950 hover:bg-gold-300 shadow-[0_0_30px_-8px_rgba(212,175,106,0.7)]",
  outline:
    "border border-gold-400/50 text-ivory-100 hover:border-gold-300 hover:bg-gold-400/10",
  ghost: "text-ivory-100/80 hover:text-gold-300",
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
