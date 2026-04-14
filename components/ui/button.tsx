import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  label: string;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  label,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "border border-slate-300 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-600",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {label}
      </Link>
    );
  }

  return <button className={classes}>{label}</button>;
}
