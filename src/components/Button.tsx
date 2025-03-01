import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

type TButtonVariants = "primary" | "secondary";

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: TButtonVariants;
};

const Button = ({ variant = "primary", children, ...props }: TButtonProps) => (
  <button
    className={clsx(
      "rounded-sm py-3 px-5 transition-colors duration-200",
      "disabled:cursor-not-allowed disabled:bg-gray-9 disabled:text-gray-11",
      "active:scale-[0.98]",
      variant === "primary"
        ? "bg-primary-9 text-white hover:bg-primary-10 active:bg-primary-8"
        : "text-primary-12 bg-primary-2 hover:bg-primary-3 active:bg-primary-2",
    )}
    {...props}
  >
    {children}
  </button>
);

export { Button };
