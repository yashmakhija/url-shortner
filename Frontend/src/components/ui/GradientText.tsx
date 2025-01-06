import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  from?: string;
  to?: string;
}

export function GradientText({
  children,
  className,
  from = "from-indigo-600",
  to = "to-purple-600",
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        from,
        to,
        className
      )}
    >
      {children}
    </span>
  );
}
