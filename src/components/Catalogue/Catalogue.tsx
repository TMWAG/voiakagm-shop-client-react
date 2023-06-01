import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { setProducts } from '../../store/slices/productsSlice';
import { type RootState } from '../../store/store';
import styles from './Catalogue.module.css';
import CatalogueItem from './CatalogueItem/CatalogueItem';

const Catalogue = (): JSX.Element => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const { categoryId } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/product/all`, {
        params: {
          categoryId,
        },
      })
      .then(({ data }) => {
        dispatch(setProducts(data));
      })
      .catch((e) => {
        console.log(e);
      });
  }, [categoryId, products]);
  return (
    <div className={styles.catalogue}>
      Catalogue
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
};

export default Catalogue;
