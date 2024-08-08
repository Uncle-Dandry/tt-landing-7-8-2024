import React, { type FC } from 'react';

import { ContentLayout } from 'components/_layouts';

import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footerRoot}>
      <ContentLayout classes={{ content: styles.footerContent }}>
        <p className={styles.footerCopyright}>
          © 2021 Лаборатория интернет
        </p>
      </ContentLayout>
    </footer>
  );
};

export default Footer;
