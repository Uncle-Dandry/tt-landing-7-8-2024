import { PUBLIC_URL } from 'constants/routes';

interface HeaderLink {
  label: string;
  link: string;
}

export const BURGER_MENU_RESOLUTION = '768';

export const HEADER_LINKS: HeaderLink[] = [
  {
    label: 'Как это работает',
    link: `${PUBLIC_URL}#about`,
  },
  {
    label: '3-й блок',
    link: `${PUBLIC_URL}#third`,
  },
  {
    label: 'Вопросы и ответы',
    link: `${PUBLIC_URL}#faq`,
  },
  {
    label: 'Форма',
    link: `${PUBLIC_URL}#form`,
  },
];
