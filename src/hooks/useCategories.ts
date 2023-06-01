import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiUrl } from '../common/constants';
import { setCategories } from '../store/slices/categoriesSlice';

export const useCategories = (): void => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(apiUrl.concat('/category/all'))
      .then(({ data }) => {
        dispatch(setCategories(data));
      })
      .catch((e) => {
        console.log(e.message);
      });
    return () => {};
  }, []);
};
