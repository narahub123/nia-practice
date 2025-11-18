import { twMerge } from "tailwind-merge";
import type { ReactButtonProps } from "../../types";
import type { ReactNode } from "react";

type ButtonProps = ReactButtonProps & {
  children: ReactNode;
};

export const Button = ({
  children,
  className: _className,
  ...props
}: ButtonProps) => {
  const className = twMerge(
    "bg-white/20 py-4 px-8  border border-white/30 backdrop-blur-xl hover:bg-white/10 text-white rounded-lg",
    _className
  );

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
