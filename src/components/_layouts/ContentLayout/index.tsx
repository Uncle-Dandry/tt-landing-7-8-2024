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
  id?: string;
  component?: keyof JSX.IntrinsicElements;
  children: ReactNode;
}

const ContentLayout: FC<ContentLayoutProps> = ({
  classes: {
    root = '',
    content = '',
  } = {},
  id,
  component: Component = 'div',
  children,
}) => {
  return (
    <Component
      className={classNames(styles.contentRoot, root)}
      id={id}
    >
      <div className={classNames(styles.contentWrapper, content)}>
        {children}
      </div>
    </Component>
  );
};

export default memo(ContentLayout);
