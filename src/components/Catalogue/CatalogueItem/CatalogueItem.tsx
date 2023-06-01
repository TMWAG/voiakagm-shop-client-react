import React from 'react';
import styles from './CatalogueItem.module.css';

const CatalogueItem = ({
  id,
  name,
  pictures,
  price,
  discount,
  used,
}: {
  id: number;
  name: string;
  pictures: Array<{ filename: string }>;
  price: number;
  discount: number | null;
  used: boolean;
}): JSX.Element => {
  return (
    <div className={styles.item} key={id}>
      <span>{name}</span>
      <img
        src={
          pictures.length !== 0
            ? `http://localhost:5000/products/${id}/${pictures[0].filename}`
            : `https://placehold.co/100x80?text=${name}`
        }
        alt={name}
      />
      <span>{price / 100}</span>
      {used ? <span>БУ</span> : ''}
      {discount !== null ? <span>Скидка: {discount}%</span> : ''}
    </div>
  );
};

export default CatalogueItem;
