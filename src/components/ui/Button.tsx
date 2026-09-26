import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "gold";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground border border-primary hover:bg-secondary",

  secondary:
    "bg-transparent text-primary border border-primary hover:bg-primary hover:text-primary-foreground",

  gold:
    "bg-gold text-white border border-gold hover:brightness-95",
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex min-h-11 cursor-pointer
        items-center justify-center
        rounded-[6px]
        px-6 py-3
        text-sm font-semibold
        transition-all duration-200
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}