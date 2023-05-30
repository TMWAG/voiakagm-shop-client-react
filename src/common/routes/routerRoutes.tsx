import Cart from '../../components/Cart/Cart';
import Catalogue from '../../components/Catalogue/Catalogue';
import DeliveryInfo from '../../components/DeliveryInfo/DeliveryInfo';
import Guarantees from '../../components/Guarantees/Guarantees';
import Home from '../../components/Home/Home';
import React from 'react';
import Recommendations from '../../components/Recommendations/Recommendations';
import Sales from '../../components/Sales/Sales';
import User from '../../components/User/User';

export interface IRouterRoutes {
  path: string;
  element: JSX.Element;
}

export const routerRoutes: IRouterRoutes[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/catalogue',
    element: <Catalogue />,
  },
  {
    path: '/delivery_info',
    element: <DeliveryInfo />,
  },
  {
    path: '/guarantees',
    element: <Guarantees />,
  },
  {
    path: '/recommendations',
    element: <Recommendations />,
  },
  {
    path: '/sales',
    element: <Sales />,
  },
  {
    path: '/user',
    element: <User />,
  },
];
