import React from 'react';
import styles from './InfoBlockItem.module.css';

const InfoBlockItem = ({
  header,
  text,
  icon,
}: {
  header: string;
  text: string;
  icon: JSX.Element;
}): JSX.Element => {
  return (
    <div className={styles.infoBlockItem}>
      {icon}
      <h2>{header}</h2>
      <span>{text}</span>
    </div>
  );
};

export default InfoBlockItem;
