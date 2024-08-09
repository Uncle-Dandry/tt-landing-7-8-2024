import React, {
  type FC,
  useEffect,
  useState,
  useCallback,
} from 'react';
import classNames from 'classnames';

import { PUBLIC_SITE_URL } from 'constants/app';
import { HOME_PAGE } from 'constants/routes';

import { useMediaQuery } from 'hooks';

import { ContentLayout } from 'components/_layouts';
import { ClickAwayListener } from 'components/_controls';

import { BurgerMenu, MainMenu } from './components';

import { BURGER_MENU_RESOLUTION } from './Header.constants';

import styles from './Header.module.scss';

const Header: FC = () => {
  const [openBurger, setOpenBurger] = useState(false);

  useEffect(
    () => {
      document.body.style.overflow = openBurger ? 'hidden' : 'auto';
    },
    [openBurger],
  );

  const isLaptop = useMediaQuery(`(max-width: ${BURGER_MENU_RESOLUTION}px)`);

  useEffect(
    () => {
      if (!isLaptop) {
        setOpenBurger(false);
      }
    },
    [isLaptop],
  );

  const toggleOpenBurger = () => {
    setOpenBurger((prevValue) => !prevValue);
  };

  const closeBurgerMenu = useCallback(
    () => {
      setOpenBurger(false);
    },
    [],
  );

  return (
    <header
      className={classNames(
        styles.headerRoot,
        { [styles.active]: openBurger },
      )}
    >
      <ContentLayout
        classes={{
          content: styles.headerContentWrapper,
        }}
      >
        <a
          className={styles.headerLogotypeLink}
          href={HOME_PAGE}
        >
          <img
            loading="lazy"
            alt="Logotype"
            src={`${PUBLIC_SITE_URL}/assets/main/logo${openBurger ? '-mobile' : ''}.svg`}
          />
        </a>

        {isLaptop ? (
          <ClickAwayListener
            className={styles.headerOpenBurgerMenuWrapper}
            onClickAway={closeBurgerMenu}
          >
            <button
              className={styles.headerOpenBurgerButton}
              type="button"
              onClick={toggleOpenBurger}
            >
              <span className={styles.headerBurgerButtonText}>
                Burger menu
              </span>

              <span
                className={!openBurger
                  ? 'burger-icon'
                  : 'cross-icon'}
              />
            </button>

            <BurgerMenu
              open={openBurger}
              onClose={closeBurgerMenu}
            />
          </ClickAwayListener>
        ) : (
          <MainMenu />
        )}

        <div
          className={classNames(
            styles.headerMenuBackground,
            { [styles.active]: openBurger },
          )}
        />
      </ContentLayout>
    </header>
  );
};

export default Header;
