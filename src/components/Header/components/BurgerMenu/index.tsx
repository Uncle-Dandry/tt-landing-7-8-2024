import React, {
  type FC,
  memo,
  useEffect,
} from 'react';
import classNames from 'classnames';

import { HEADER_LINKS } from 'components/Header/Header.constants';

import arrowIconSrc from 'assets/icons/arrow-small-right.svg';

import styles from './BurgerMenu.module.scss';

interface BurgerMenuProps {
  open: boolean;
  onClose: () => void;
}

const BurgerMenu: FC<BurgerMenuProps> = ({
  open,
  onClose,
}) => {
  useEffect(
    () => {
      onClose();
    },
    [window.location.pathname, onClose],
  );

  return (
    <div
      className={classNames(
        styles.burgerMenuRoot,
        { [styles.active]: open },
      )}
    >
      <ul className={styles.burgerMenu}>
        {HEADER_LINKS.map(({
          label,
          link,
        }) => (
          <li
            className={styles.burgerMenuItem}
            key={label}
          >
            <a className={styles.burgerMenuItemLink} href={link} onClick={onClose}>
              <span className={styles.burgerMenuItemText}>
                {label}
              </span>

              <span className={styles.burgerMenuItemIconWrapper}>
                <img
                  loading="lazy"
                  alt="Arrow right icon"
                  src={arrowIconSrc}
                />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(BurgerMenu);
