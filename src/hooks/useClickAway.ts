import {
  type RefObject,
  useEffect,
  useRef,
} from 'react';

const useClickAway = (handler: (event: MouseEvent | TouchEvent) => void): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(
    () => {
      const handleClick = (event: MouseEvent | TouchEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          handler(event);
        }
      };

      document.addEventListener('mousedown', handleClick);
      document.addEventListener('touchstart', handleClick);

      return () => {
        document.removeEventListener('mousedown', handleClick);
        document.removeEventListener('touchstart', handleClick);
      };
    },
    [handler],
  );

  return ref;
};

export default useClickAway;
