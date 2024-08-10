import type { SwiperProps } from 'swiper/react';

import avatarDefaultSrc from 'assets/home/reviews/avatar-1.png';
import avatarSecondSrc from 'assets/home/reviews/avatar-2.png';
import avatarThirdSrc from 'assets/home/reviews/avatar-3.png';

interface SwiperBreakpoints {
  [width: number]: SwiperProps;
  [ratio: string]: SwiperProps;
}

export interface ReviewItem {
  avatarAlt: string;
  avatarSrc: string;
  name: string;
  position: string;
  description: string;
}

export const SWIPER_BREAKPOINTS: SwiperBreakpoints = {
  0: {
    navigation: {
      enabled: false,
    },
    slidesPerView: 1,
    spaceBetween: 20,
  },
  480: {
    navigation: {
      enabled: false,
    },
    slidesPerView: 2,
    spaceBetween: 24,
  },
  768: {
    navigation: {
      enabled: true,
    },
    slidesPerView: 2,
    spaceBetween: 24,
  },
  956: {
    navigation: {
      enabled: true,
    },
    slidesPerView: 3,
    spaceBetween: 32,
  },
};

export const REVIEW_LIST: ReviewItem[] = [
  {
    avatarAlt: 'Avatar default',
    avatarSrc: avatarDefaultSrc,
    name: 'Константинов Михаил Павлович',
    position: 'Санкт-Петербург',
    description: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы',
  },
  {
    avatarAlt: 'Avatar image 2',
    avatarSrc: avatarSecondSrc,
    name: 'Иван Иванов',
    position: 'Санкт-Петербург',
    description: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
  },
  {
    avatarAlt: 'Avatar image 3',
    avatarSrc: avatarThirdSrc,
    name: 'Артем Корнилов',
    position: 'Самара',
    description: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
  },
];
