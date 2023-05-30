import React from 'react';
import './App.css';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Catalogue from './components/Catalogue/Catalogue';
import Sales from './components/Sales/Sales';
import User from './components/User/User';
import Cart from './components/Cart/Cart';
import Recommendations from './components/Recommendations/Recommendations';
import Guarantees from './components/Guarantees/Guarantees';
import DeliveryInfo from './components/DeliveryInfo/DeliveryInfo';

const Wrapper = styled.div``;

function App(): JSX.Element {
  return (
    <Wrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/delivery_info" element={<DeliveryInfo />} />
        <Route path="/guarantees" element={<Guarantees />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/user" element={<User />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
