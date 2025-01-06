import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
  hover?: boolean;
}

export function Card({
  children,
  className,
  gradient = false,
  hover = true,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : undefined}
      className="relative group"
    >
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity" />
      )}
      <div
        className={cn(
          "relative p-6 bg-white rounded-2xl border border-gray-100",
          hover && "hover:shadow-md transition-shadow",
          className
        )}
      >
        {children}
      </div>
    </motion.div>
  );
}
