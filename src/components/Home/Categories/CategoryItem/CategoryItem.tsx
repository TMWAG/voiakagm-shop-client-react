import React from 'react';
import styles from './CategoryItem.module.css';
import { NavLink } from 'react-router-dom';

const CategoryItem = ({
  id,
  name,
  picture,
}: {
  id: number;
  name: string;
  picture: string;
}): JSX.Element => {
  return (
    <div className={styles.categoryItem}>
      <span>{name}</span>
      <NavLink to={`/catalogue?categoryId=${id}`}>Подробнее...</NavLink>
      <img
        src={
          picture !== null
            ? `http://localhost:5000/category/${picture}`
            : 'https://placehold.co/100/orange/black?text=category'
        }
        alt={name}
      />
    </div>
  );
};

export default CategoryItem;
