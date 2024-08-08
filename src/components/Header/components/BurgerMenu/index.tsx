import React, {
  type FC,
  memo,
  useEffect,
} from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { PUBLIC_SITE_URL } from 'constants/app';

import { HEADER_LINKS } from 'components/Header/Header.constants';

import styles from './BurgerMenu.module.scss';

interface BurgerMenuProps {
  open: boolean;
  onClose: () => void;
}

const BurgerMenu: FC<BurgerMenuProps> = ({
  open,
  onClose,
}) => {
  const { pathname } = useLocation();

  useEffect(
    () => {
      onClose();
    },
    [pathname],
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
          <a
            className={styles.burgerMenuItemLink}
            href={link}
            key={label}
            onClick={onClose}
          >
            <li className={styles.burgerMenuItem}>
              <span className={styles.burgerMenuItemText}>
                {label}
              </span>

              <span className={styles.burgerMenuItemIconWrapper}>
                <img
                  loading="lazy"
                  alt="Arrow right icon"
                  src={`${PUBLIC_SITE_URL}/assets/icons/arrow-small-right.svg`}
                />
              </span>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default memo(BurgerMenu);
