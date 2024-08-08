import React, {
  type FC,
  type PropsWithChildren,
  memo,
} from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  className?: string;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  variant?: 'primary' | 'default';
  onClick?: () => void;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  className = '',
  disabled = false,
  type = 'button',
  variant = 'default',
  onClick,
  children,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default memo(Button);
