import React from "react";
import styles from "./Input.module.css";

type InputProps = {
  variant?: "default" | "outlined" | "filled";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  variant = "default",
  size = "medium",
  disabled = false,
  placeholder = "",
  value = "",
  onChange,
}) => {
  const inputClassNames = [
    styles.input,
    styles[variant],
    styles[size],
    disabled ? styles.disabled : "",
  ].join(" ");

  return (
    <input
      className={inputClassNames}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default Input;
