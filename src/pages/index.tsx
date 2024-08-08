import React, {
  type FC,
  memo,
} from 'react';

import {
  HowItWorksSection,
  MainSection,
} from 'components/_pages/home';

const HomePage: FC = () => {
  return (
    <>
      <MainSection />

      <HowItWorksSection />

      {/* <CoolThirdSection /> */}

      {/* <ReviewsSection /> */}

      {/* <FAQSection /> */}

      {/* <SurveySection /> */}

      {/* <ContactForm /> */}
    </>
  );
};

export default memo(HomePage);
