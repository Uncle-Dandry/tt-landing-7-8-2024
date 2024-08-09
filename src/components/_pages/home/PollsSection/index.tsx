import React, {
  type FC,
  memo,
} from 'react';

import { ContentLayout } from 'components/_layouts';

import { POLLS_LIST } from './PollsSection.constants';

import styles from './PollsSection.module.scss';

const PollsSection: FC = () => {
  return (
    <ContentLayout
      classes={{
        root: styles.pollsSectionRoot,
        content: styles.pollsSectionContentWrapper,
      }}
      component="section"
    >
      <ul className={styles.pollsSectionList}>
        {POLLS_LIST.map(({
          title,
          description,
        }, index) => (
          <div
            className={styles.pollsSectionPollBlock}
            key={`${title}-${index}`}
          >
            <h6 className={styles.pollsSectionTitle}>
              {title}
            </h6>

            <p className={styles.pollsSectionDescription}>
              {description}
            </p>
          </div>
        ))}
      </ul>
    </ContentLayout>
  );
};

export default memo(PollsSection);
