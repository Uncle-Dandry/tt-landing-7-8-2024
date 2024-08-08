import React, {
  type FC,
  type ReactNode,
  memo,
} from 'react';
import classNames from 'classnames';

import styles from './ContentLayout.module.scss';

interface ContentLayoutClassesProps {
  root?: string;
  content?: string;
}

interface ContentLayoutProps {
  classes?: ContentLayoutClassesProps;
  component?: keyof JSX.IntrinsicElements;
  children: ReactNode;
}

const ContentLayout: FC<ContentLayoutProps> = ({
  classes: {
    root = '',
    content = '',
  } = {},
  component: Component = 'div',
  children,
}) => {
  return (
    <Component className={classNames(styles.contentRoot, root)}>
      <div className={classNames(styles.contentWrapper, content)}>
        {children}
      </div>
    </Component>
  );
};

export default memo(ContentLayout);
