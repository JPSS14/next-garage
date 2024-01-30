import React from "react";
import { SelectItems } from "../form-hook-forms/types";
import styles from "./select.module.scss";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  items: SelectItems[];
}

export const Select = React.forwardRef<HTMLScriptElement, SelectProps>(
  ({ label, name, items, ...props }, _ref) => {
    return (
      <div className={styles.selectContainer}>
        {label && (
          <label htmlFor={name} className={styles.label}>
            {label}
          </label>
        )}
        <select {...props} className={styles.select}>
          {items.map((item) => (
            <option key={item.id}>{item.name}</option>
          ))}
        </select>
      </div>
    );
  }
);

Select.displayName = "Select";
