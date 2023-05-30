import React, { useEffect } from 'react';
import axios from 'axios';
import { setCategories } from '../../store/slices/categoriesSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import styled from 'styled-components';
import Promoted from './Promoted/Promoted';
import { StyledHome } from './StyledHome';

const StyledCategory = styled.div`
  width: 33%;
  > img {
    width: 100px;
  }
`;

const Category = ({
  name,
  picture,
}: {
  name: string;
  picture: string;
}): JSX.Element => {
  return (
    <StyledCategory>
      {name}
      <img
        src={
          picture !== null
            ? `http://localhost:5000/category/${picture}`
            : 'https://placehold.co/100/orange/black?text=category'
        }
        alt={name}
      />
    </StyledCategory>
  );
};

const Home = (): JSX.Element => {
  const dispatch = useDispatch();
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );
  useEffect(() => {
    axios('http://localhost:5000/api/category/all')
      .then(({ data }) => {
        dispatch(setCategories(data));
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [categories, dispatch]);
  return (
    <StyledHome>
      home
      <Promoted />
      {categories.length !== 0 ? (
        categories.map((c) => (
          <Category key={c.id} name={c.name} picture={c.picture} />
        ))
      ) : (
        <div>no categories</div>
      )}
    </StyledHome>
  );
};

export default Home;
