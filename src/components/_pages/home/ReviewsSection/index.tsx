import React, {
  type FC,
  memo,
  useState,
  useEffect,
} from 'react';
import classNames from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
} from 'swiper/modules';

import { ContentLayout } from 'components/_layouts';

import { Review } from './components';

import { REVIEW_LIST, SWIPER_BREAKPOINTS } from './ReviewsSection.constants';

import styles from './ReviewsSection.module.scss';

const ReviewsSection: FC = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(
    () => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => (
        window.removeEventListener('resize', handleResize)
      );
    },
    [],
  );

  return (
    <ContentLayout
      classes={{
        root: styles.reviewsSectionRoot,
        content: styles.reviewsSectionContentWrapper,
      }}
      component="section"
    >
      <h2 className={styles.reviewsSectionTitle}>
        Отзывы
      </h2>

      <div className={styles.reviewsSectionSwiperContainer}>
        <div className={styles.reviewsSectionSwiperWrapper}>
          <Swiper
            className={styles.reviewsSectionSwiper}
            wrapperClass={styles.reviewsSectionSwiperInnerWrapper}
            autoHeight
            spaceBetween={32}
            slidesPerView={3}
            key={width}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={SWIPER_BREAKPOINTS}
            modules={[Navigation, Pagination]}
          >
            {[
              ...REVIEW_LIST,
              ...REVIEW_LIST,
              ...REVIEW_LIST,
            ].map((reviewProps, index) => (
              <SwiperSlide
                className={styles.reviewsSectionSwiperSlide}
                key={`${reviewProps.name}-${index}`}
              >
                <Review {...reviewProps} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div
          className={classNames(
            'swiper-pagination',
            styles.reviewsSectionSwiperPagination,
          )}
        />

        <div
          className={classNames(
            'swiper-button-next',
            styles.reviewsSectionSwiperNavButton,
          )}
        />

        <div
          className={classNames(
            'swiper-button-prev',
            styles.reviewsSectionSwiperNavButton,
          )}
        />
      </div>
    </ContentLayout>
  );
};

export default memo(ReviewsSection);
