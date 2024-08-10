import React, {
  type FC,
  memo,
} from 'react';

import type { ReviewItem } from '../../ReviewsSection.constants';

import styles from './Review.module.scss';

const Review: FC<ReviewItem> = ({
  avatarAlt,
  avatarSrc,
  name,
  position,
  description,
}) => {
  return (
    <li className={styles.reviewItemRoot}>
      <div className={styles.reviewAvatar}>
        <img
          loading="lazy"
          src={avatarSrc}
          alt={avatarAlt}
        />
      </div>

      <h6 className={styles.reviewItemName}>
        {name}
      </h6>

      <p className={styles.reviewItemPosition}>
        {position}
      </p>

      <p className={styles.reviewItemDescription}>
        {description}
      </p>
    </li>
  );
};

export default memo(Review);
