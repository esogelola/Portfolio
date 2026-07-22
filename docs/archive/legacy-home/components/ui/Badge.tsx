import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline" | "none";
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors";

  const variantStyles = {
    default:
      "bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700",
    outline:
      "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-white/10",
    none: "",
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};

export { Badge };

