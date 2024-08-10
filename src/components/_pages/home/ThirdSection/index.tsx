import React, {
  type FC,
  memo,
} from 'react';

import { ContentLayout } from 'components/_layouts';

import phoneManSrc from 'assets/home/cool-third-block/phone-man.webp';

import styles from './ThirdSection.module.scss';

const ThirdSection: FC = () => {
  return (
    <ContentLayout
      classes={{
        content: styles.thirdSectionContentWrapper,
      }}
      id="third"
      component="section"
    >
      <h3 className={styles.thirdSectionTitle}>
        Круто, ты дошел до третьего блока
      </h3>

      <p className={styles.thirdSectionDescription}>
        63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.
        <br />

        <br />
        Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.
      </p>

      <img
        className={styles.thirdSectionImage}
        alt="Expenses"
        src={phoneManSrc}
      />
    </ContentLayout>
  );
};

export default memo(ThirdSection);
