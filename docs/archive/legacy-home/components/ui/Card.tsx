import type { ElementType, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/**
 * Card — the paper surface primitive.
 *
 * One responsibility: render a sheet of "paper". Soft 1px hair border,
 * gentle layered shadow, rounded corners. Everything inside is left to
 * the caller. Light/dark are handled here so consumers never repeat the
 * surface tokens.
 */
export default function Card({ children, className = "", as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={`bg-paper-card dark:bg-paper-dark-card border border-hair dark:border-hair-dark rounded-bubble shadow-paper ${className}`}
    >
      {children}
    </Tag>
  );
}
