import React, {
  type FC,
  memo,
} from 'react';

import { ContentLayout } from 'components/_layouts';
import { Accordion } from 'components/_controls';

import { FAQ_LIST } from './FAQSection.constants';

import styles from './FAQSection.module.scss';

const FAQSection: FC = () => {
  return (
    <ContentLayout
      classes={{
        content: styles.faqSectionContentWrapper,
      }}
      id="faq"
      component="section"
    >
      <h2 className={styles.faqSectionTitle}>
        Вопросы и ответы
      </h2>

      <ul className={styles.faqSectionList}>
        {FAQ_LIST.map(({
          label,
          description,
        }) => (
          <Accordion
            className={styles.faqSectionAccordion}
            key={label}
            title={label}
          >
            <p className={styles.faqSectionAccordionText}>
              {description}
            </p>
          </Accordion>
        ))}
      </ul>
    </ContentLayout>
  );
};

export default memo(FAQSection);
