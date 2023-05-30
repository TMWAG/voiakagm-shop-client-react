import React from 'react';
import './App.css';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { routerRoutes } from './common/routes/routerRoutes';

const StyledWrapper = styled.div``;

function App(): JSX.Element {
  return (
    <StyledWrapper>
      <Navbar />
      <Routes>
        {routerRoutes.map((r) => (
          <Route {...r} key={r.path.concat('Router')} />
        ))}
      </Routes>
    </StyledWrapper>
  );
}

export default App;
