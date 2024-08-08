import React, {
  type FC,
  type ReactNode,
  useCallback,
  memo,
} from 'react';

import { useClickAway } from 'hooks';

interface ClickAwayListenerProps {
  className?: string;
  onClickAway: (event: MouseEvent | TouchEvent) => void;
  children: ReactNode;
}

const ClickAwayListener: FC<ClickAwayListenerProps> = ({
  className,
  onClickAway,
  children,
}) => {
  const handleClickAway = useCallback(
    (event: MouseEvent | TouchEvent) => {
      onClickAway(event);
    },
    [onClickAway],
  );

  const ref = useClickAway(handleClickAway);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
};

export default memo(ClickAwayListener);
