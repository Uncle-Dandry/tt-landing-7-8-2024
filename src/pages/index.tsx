import React, {
  type FC,
  memo,
} from 'react';

import {
  ContactSection,
  FAQSection,
  HowItWorksSection,
  MainSection,
  PollsSection,
  ReviewsSection,
  ThirdSection,
} from 'components/_pages/home';

const HomePage: FC = () => {
  return (
    <>
      <MainSection />

      <HowItWorksSection />

      <ThirdSection />

      <ReviewsSection />

      <FAQSection />

      <PollsSection />

      <ContactSection />
    </>
  );
};

export default memo(HomePage);
