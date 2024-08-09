import React, {
  type FC,
  memo,
} from 'react';

import { ContentLayout } from 'components/_layouts';
import { ContactForm } from 'components/_forms';

import styles from './ContactSection.module.scss';

const ContactSection: FC = () => {
  return (
    <ContentLayout
      classes={{
        content: styles.contactSectionContentWrapper,
      }}
      component="section"
    >
      <h2 className={styles.contactSectionTitle}>
        Отправь форму
      </h2>

      <ContactForm
        className={styles.contactSectionForm}
        id="form"
      />
    </ContentLayout>
  );
};

export default memo(ContactSection);
