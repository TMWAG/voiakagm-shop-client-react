import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiUrl } from '../common/constants';
import { setProducts } from '../store/slices/productsSlice';

export const useCategoryProducts = (categoryId: number): void => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(apiUrl.concat('/product/all'), { params: { categoryId } })
      .then(({ data }) => {
        dispatch(setProducts(data));
      })
      .catch((e) => {
        console.log(e.message);
      });
    return () => {};
  }, [categoryId]);
};
