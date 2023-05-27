import React from 'react';
import './App.css';
import styled  from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Catalogue from './components/Pages/Catalogue/Catalogue';
import Sales from './components/Pages/Sales/Sales';
import Favorites from './components/Pages/Favorites/Favorites';
import User from './components/Pages/User/User';
import Cart from './components/Pages/Cart/Cart';
import Recommendations from './components/Pages/Recommendations/Recommendations';

const Wrapper = styled.div`

`;

function App() {
  return (
    <Wrapper>
      <Navbar/>
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
        <Route
          path='/catalogue'
          element={<Catalogue/>}
        />
        <Route
          path='/sales'
          element={<Sales/>}
        />
        <Route
          path='/favorites'
          element={<Favorites/>}
        />
        <Route
          path='/user'
          element={<User/>}
        />
        <Route
          path='/cart'
          element={<Cart/>}
        />
        <Route
          path='/recommendations'
          element={<Recommendations/>}
        />
      </Routes>
    </Wrapper>
  );
}

export default App;
