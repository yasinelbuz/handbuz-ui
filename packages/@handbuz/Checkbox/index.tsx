import React from "react";
import styles from "./checkbox.module.css";

type CheckboxProps = {
  checked: boolean;
  label?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  label,
  disabled = false,
  onChange,
}) => {
  return (
    <label className={`${styles.checkbox} ${disabled ? styles.disabled : ""}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={styles.input}
      />
      <span className={styles.label}>{label}</span>
    </label>
  );
};

export default Checkbox;
