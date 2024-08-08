import { useState, useEffect } from 'react';

const useMediaQuery = (breakpoint: string) => {
  const [matches, setMatches] = useState<boolean>(window.matchMedia(breakpoint).matches);

  useEffect(
    () => {
      const mediaQueryList = window.matchMedia(breakpoint);

      const documentChangeHandler = () => (
        setMatches(mediaQueryList.matches)
      );

      mediaQueryList.addEventListener('change', documentChangeHandler);

      return () => {
        mediaQueryList.removeEventListener('change', documentChangeHandler);
      };
    },
    [breakpoint],
  );

  return matches;
};

export default useMediaQuery;
