import React from "react";
import styles from "./text-area.module.scss";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, name, children, ...props }, ref) => {
    return (
      <div className={styles.textAreaContainer}>
        {label && (
          <label htmlFor={name} className={styles.label}>
            {label}
          </label>
        )}
        <textarea {...props} name={name} className={styles.textArea} ref={ref}>
          {children}
        </textarea>
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
