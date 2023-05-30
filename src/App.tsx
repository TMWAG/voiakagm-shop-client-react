import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { routerRoutes } from './common/routes/routerRoutes';

function App(): JSX.Element {
  return (
    <div>
      <Navbar />
      <Routes>
        {routerRoutes.map((r) => (
          <Route {...r} key={r.path.concat('Router')} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
