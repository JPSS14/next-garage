import React from "react";
import styles from "./input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, ...props }, ref) => {
    return (
      <div className={styles.inputContainer}>
        {label && (
          <label htmlFor={name} className={styles.label}>
            {label}
          </label>
        )}
        <input {...props} name={name} className={styles.input} ref={ref} />
      </div>
    );
  }
);

Input.displayName = "Input";
