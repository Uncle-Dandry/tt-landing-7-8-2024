import React, {
  type FC,
  memo,
} from 'react';

import { ContentLayout } from 'components/_layouts';

import { HIW_LIST } from './HowItWorksSection.constants';

import { HowItWorksItem } from './components';

import styles from './HowItWorksSection.module.scss';

const HowItWorksSection: FC = () => {
  return (
    <ContentLayout
      classes={{
        root: styles.howItWorksSectionRoot,
        content: styles.howItWorksSectionContentWrapper,
      }}
      component="section"
    >
      <h2 className={styles.howItWorksSectionTitle}>
        Как это работает
      </h2>

      <ul className={styles.howItWorksSectionList}>
        {HIW_LIST.map((elementProps) => (
          <HowItWorksItem
            key={elementProps.label}
            {...elementProps}
          />
        ))}
      </ul>
    </ContentLayout>
  );
};

export default memo(HowItWorksSection);
