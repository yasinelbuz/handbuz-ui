import React, { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.css";

import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "danger";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  label?: string;
}

export interface Props extends ButtonProps {
  className?: string;
  children?: string;
}

export const Button: React.FC<Props> = ({
  children,
  label,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  disabled = false,
  onClick,
  className,
  ...props
}) => {
  const combinedStyles = clsx(
    styles.base,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    className
  );

  return (
    <button
      className={combinedStyles}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {label ? label : children}
    </button>
  );
};

export default Button;
