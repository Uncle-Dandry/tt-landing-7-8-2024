import React, {
  type FC,
  memo,
} from 'react';

import {
  FAQSection,
  HowItWorksSection,
  MainSection,
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

      {/* <SurveySection /> */}

      {/* <ContactForm /> */}
    </>
  );
};

export default memo(HomePage);
