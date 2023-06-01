import React from 'react';
import styles from './Categories.module.css';
import type { RootState } from '../../../store/store';
import CategoryItem from './CategoryItem/CategoryItem';
import { useCategories } from '../../../hooks/useCategories';
import { useSelector } from 'react-redux';

const Categories = (): JSX.Element => {
  useCategories();
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );
  return (
    <div className={styles.categoriesBlock}>
      {categories.length !== 0 ? (
        categories.map((c) => (
          <CategoryItem
            key={c.id}
            id={c.id}
            name={c.name}
            picture={c.picture}
          />
        ))
      ) : (
        <div>no categories</div>
      )}
    </div>
  );
};

export default Categories;
