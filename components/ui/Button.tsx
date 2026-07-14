import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "dark" | "outline";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-on-primary hover:bg-primary-deep active:bg-primary-deep",
  dark: "bg-surface-dark text-on-dark hover:opacity-90",
  outline: "border border-hairline-strong bg-surface-card text-ink hover:bg-canvas",
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-base font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring-focus ${variantStyles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
