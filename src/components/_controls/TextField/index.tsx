import React, {
  type ChangeEvent,
  type FC,
  type FocusEvent,
  useState,
  memo,
} from 'react';

import styles from './TextField.module.scss';

interface TextFieldProps {
  error: boolean;
  value: string;
  placeholder: string;
  helperText?: string;
  iconSrc?: string | false;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
}

const TextField: FC<TextFieldProps> = ({
  error,
  value,
  placeholder,
  helperText,
  iconSrc,
  onChange,
  onBlur,
}) => {
  const [focused, setFocused] = useState<boolean>(false);

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    onBlur(event);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div
      className={`${
        styles.textFieldWrapper
      } ${
        focused || value ? styles.filled : ''
      } ${
        error ? styles.invalid : styles.valid
      }`}
    >
      <div className={styles.textFieldContainer}>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />

        <label className={styles.label}>
          {placeholder}
        </label>

        {iconSrc && (
          <img
            className={`${styles.icon} ${error ? styles.invalid : styles.valid}`}
            alt="Validation icon"
            src={iconSrc}
          />
        )}

        {error && helperText && (
          <p className={styles.textFieldHelperText}>
            {helperText}
          </p>
        )}
      </div>
    </div>
  );
};

export default memo(TextField);
