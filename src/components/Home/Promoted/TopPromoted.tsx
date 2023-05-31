import React from 'react';
import styles from './TopPromited.module.css';
import PromotedCard from './PromotedCard/PromotedCard';
import PromotedSlider from './PromotedSlider/PromotedSlider';

const TopPromoted = (): JSX.Element => {
  return (
    <div className={styles.topPromoted}>
      <PromotedSlider />
      <PromotedCard />
    </div>
  );
};

export default TopPromoted;
