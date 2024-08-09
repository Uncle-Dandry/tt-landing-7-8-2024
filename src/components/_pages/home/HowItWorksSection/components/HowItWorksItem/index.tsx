import React, {
  type FC,
  memo,
} from 'react';

import type { HIWElement } from '../../HowItWorksSection.constants';

import styles from './HowItWorksItem.module.scss';

const HowItWorksItem: FC<HIWElement> = ({
  label,
  description,
  iconAlt,
  iconSrc,
}) => {
  return (
    <li className={styles.howItWorksItemRoot}>
      <img
        className={styles.howItWorksItemIcon}
        loading="lazy"
        src={iconSrc}
        alt={iconAlt}
      />

      <h6 className={styles.howItWorksItemLabel}>
        {label}
      </h6>

      <p className={styles.howItWorksItemDescription}>
        {description}
      </p>
    </li>
  );
};

export default memo(HowItWorksItem);
