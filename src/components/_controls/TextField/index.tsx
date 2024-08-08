import React, {
  type ChangeEvent,
  type FC,
  type FocusEvent,
  useState,
  memo,
} from 'react';

import styles from './TextField.module.scss';

interface TextFieldProps {
  value: string;
  placeholder: string;
  helperText?: string;
  isValid?: boolean;
  iconSrc?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
}

const TextField: FC<TextFieldProps> = ({
  value,
  placeholder,
  helperText,
  isValid,
  iconSrc,
  onChange,
  onBlur,
}) => {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <div className={`${styles.container} ${focused || value ? styles.filled : ''}`}>
      <input
        className={styles.input}
        type="text"
        value={value}
        placeholder={focused || value ? '' : placeholder}
        onChange={onChange}
        onBlur={(event) => {
          setFocused(false);
          onBlur(event);
        }}
        onFocus={() => setFocused(true)}
      />

      <label className={styles.label}>
        {placeholder}
      </label>

      {iconSrc && (
        <img
          className={`${styles.icon} ${!isValid ? styles.invalid : styles.valid}`}
          alt="Validation icon"
          src={iconSrc}
        />
      )}

      {helperText && (
        <div className={styles.helperText}>
          {helperText}
        </div>
      )}
    </div>
  );
};

export default memo(TextField);
