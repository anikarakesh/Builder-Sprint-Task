import type { PropsWithChildren } from "react";

export type ContainerProps = PropsWithChildren<{
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}>;

const sizeToMaxWidth: Record<NonNullable<ContainerProps["size"]>, string> = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

export function Container({ children, size = "lg", className = "" }: ContainerProps) {
  const max = sizeToMaxWidth[size];
  return <div className={`mx-auto w-full ${max} px-4 ${className}`}>{children}</div>;
}


