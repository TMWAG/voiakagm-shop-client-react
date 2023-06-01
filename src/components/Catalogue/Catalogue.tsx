import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { type RootState } from '../../store/store';
import styles from './Catalogue.module.css';
import CatalogueItem from './CatalogueItem/CatalogueItem';
import { useCategoryProducts } from '../../hooks/useCategoryProducts';

const Catalogue = (): JSX.Element => {
  const products = useSelector((state: RootState) => state.products.products);
  const { categoryId } = useParams();
  if (!Number.isNaN(categoryId)) {
    useCategoryProducts(Number(categoryId));
    return (
      <div className={styles.catalogue}>
        {products.map((p) => (
          <CatalogueItem
            key={p.id}
            id={p.id}
            name={p.name}
            pictures={p.pictures}
            price={p.price}
            discount={p.discount}
            used={p.used}
          />
        ))}
      </div>
    );
  } else {
    return <div>Не категория не указана</div>;
  }
};

export default Catalogue;
