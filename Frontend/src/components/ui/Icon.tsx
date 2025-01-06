import { IconType } from "react-icons";
import { cn } from "../../lib/utils";

interface IconProps {
  icon: IconType;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export function Icon({
  icon: IconComponent,
  className,
  size = "md",
}: IconProps) {
  return <IconComponent className={cn(sizeClasses[size], className)} />;
}
