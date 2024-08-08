import iconSrcWaiting from 'assets/home/how-it-works/waiting.svg';
import iconSrcTruck from 'assets/home/how-it-works/delivery-truck.svg';
import iconSrcSecure from 'assets/home/how-it-works/secure.svg';
import iconSrcBag from 'assets/home/how-it-works/money-bags.svg';

export interface HIW_ELEMENT {
  iconSrc: string;
  iconAlt: string;
  label: string;
  description: string;
}

export const HIW_LIST: HIW_ELEMENT[] = [
  {
    iconSrc: iconSrcWaiting,
    iconAlt: 'Waiting',
    label: 'Прочитай задание внимательно',
    description: 'Думаю у тебя не займет это больше двух-трех минут',
  },
  {
    iconSrc: iconSrcTruck,
    iconAlt: 'Truck',
    label: 'Изучи весь макет заранее',
    description: 'Подумай как это будет работать на разных разрешениях и при скролле',
  },
  {
    iconSrc: iconSrcSecure,
    iconAlt: 'Secure',
    label: 'Сделай хорошо',
    description: 'Чтобы мы могли тебе доверить подобные задачи в будущем',
  },
  {
    iconSrc: iconSrcBag,
    iconAlt: 'Money Bags',
    label: 'Получи предложение',
    description: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))',
  },
];
