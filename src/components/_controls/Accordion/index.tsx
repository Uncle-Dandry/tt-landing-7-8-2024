import React, {
  type FC,
  type PropsWithChildren,
  memo,
  useState,
} from 'react';
import classNames from 'classnames';

import styles from './Accordion.module.scss';

interface AccordionProps {
  className?: string;
  title: string;
}

const Accordion: FC<PropsWithChildren<AccordionProps>> = ({
  className = '',
  title,
  children,
}) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      className={classNames(
        styles.accordion,
        className,
      )}
    >
      <button
        className={classNames(
          styles.accordionSummary,
          { [styles.open]: open },
        )}
        type="button"
        onClick={handleToggle}
      >
        <span className={styles.accordionTitle}>
          {title}
        </span>

        <span
          className={classNames(
            styles.accordionIcon,
            { [styles.open]: open },
          )}
        >
          Toggle Icon
        </span>
      </button>

      <div
        className={classNames(
          styles.accordionContent,
          { [styles.open]: open },
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default memo(Accordion);
