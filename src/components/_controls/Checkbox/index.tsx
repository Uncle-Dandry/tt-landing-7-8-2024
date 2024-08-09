import React, {
  type FC,
  type ChangeEvent,
  memo,
  useId,
} from 'react';
import classNames from 'classnames';

import checkmarkSrc from 'assets/icons/checkmark.svg';

import styles from './Checkbox.module.scss';

interface CheckboxProps {
  className?: string;
  disabled?: boolean;
  error?: boolean;
  value?: boolean;
  label: string;
  helperText?: string;
  onChange: (value: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = ({
  className = '',
  disabled = false,
  error = false,
  value = false,
  label,
  helperText = '',
  onChange,
}) => {
  const checkboxId = useId();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event?.target?.checked);
  };

  console.log(value);

  return (
    <div
      className={classNames(
        styles.checkboxWrapper,
        className,
      )}
    >
      <label
        className={classNames(
          styles.checkboxLabel,
          { [styles.checked]: value },
          { [styles.disabled]: disabled },
        )}
        htmlFor={checkboxId}
      >
        <input
          type="checkbox"
          disabled={disabled}
          id={checkboxId}
          checked={value}
          onChange={handleChange}
        />

        <span className="checkmark">
          <img
            alt="Checkmark"
            src={checkmarkSrc}
          />
        </span>

        <span className="checkbox-text">
          {label}
        </span>

        {error && helperText && (
          <span className="helper-text">
            {helperText}
          </span>
        )}
      </label>
    </div>
  );
};

export default memo(Checkbox);
