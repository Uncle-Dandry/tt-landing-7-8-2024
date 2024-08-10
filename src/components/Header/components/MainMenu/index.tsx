import React, {
  type FC,
  memo,
} from 'react';
import classNames from 'classnames';

import { HEADER_LINKS } from 'components/Header/Header.constants';

import styles from './MainMenu.module.scss';

interface MainMenuProps {
  className?: string;
}

const MainMenu: FC<MainMenuProps> = ({
  className,
}) => {
  return (
    <nav className={classNames(styles.mainMenuRoot, className)}>
      <ul className={styles.mainMenu}>
        {HEADER_LINKS.map(({
          label,
          link,
        }) => (
          <li key={label}>
            <a className={styles.mainMenuItem} href={link}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default memo(MainMenu);
