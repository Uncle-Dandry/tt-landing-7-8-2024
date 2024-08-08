import { HOME_PAGE } from 'constants/routes';

interface HeaderLink {
  label: string;
  link: string;
}

export const BURGER_MENU_RESOLUTION = '768';

export const HEADER_LINKS: HeaderLink[] = [
  {
    label: 'Как это работает',
    link: `${HOME_PAGE}#about`,
  },
  {
    label: '3-й блок',
    link: `${HOME_PAGE}#third`,
  },
  {
    label: 'Вопросы и ответы',
    link: `${HOME_PAGE}#faq`,
  },
  {
    label: 'Форма',
    link: `${HOME_PAGE}#form`,
  },
];
