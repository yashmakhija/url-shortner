import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface FloatingElementProps extends MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FloatingElement({
  children,
  className,
  delay = 0,
  ...props
}: FloatingElementProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,

        stiffness: 100,
        damping: 20,
      }}
      className={cn("relative", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
