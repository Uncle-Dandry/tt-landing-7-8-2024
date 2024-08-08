import React, {
  type FC,
  memo,
} from 'react';

import { ContentLayout } from 'components/_layouts';
import { Button } from 'components/_controls/_buttons';

import styles from './MainSection.module.scss';

const MainSection: FC = () => {
  return (
    <ContentLayout
      classes={{
        root: styles.root,
        content: styles.contentWrapper,
      }}
      component="section"
    >
      <h1 className={styles.mainSectionTitle}>
        Говорят, никогда не поздно сменить профессию
      </h1>

      <p className={styles.mainSectionTextBody}>
        Сделай круто тестовое задание и у тебя получится
      </p>

      <Button
        className={styles.investBtn}
        onClick={() => {}}
      >
        Проще простого!
      </Button>
    </ContentLayout>
  );
};

export default memo(MainSection);
