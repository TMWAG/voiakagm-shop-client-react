import React, { useEffect } from 'react';
import styles from './Categories.module.css';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import axios from 'axios';
import { setCategories } from '../../../store/slices/categoriesSlice';
import CategoryItem from './CategoryItem/CategoryItem';

const Categories = (): JSX.Element => {
  const dispatch = useDispatch();
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/category/all')
      .then(({ data }) => {
        dispatch(setCategories(data));
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [categories, dispatch]);
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
