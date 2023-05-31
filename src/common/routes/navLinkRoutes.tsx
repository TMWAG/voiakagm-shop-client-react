import React from 'react';
import CartSVG from '../icons/CartSVG';
import PersonSVG from '../icons/PersonSVG';

export interface INavLinkRoutes {
  to: string;
  content: JSX.Element | string;
}

export const navLinkRoutes = [
  {
    to: '/guarantees',
    content: 'Гарантии',
  },
  {
    to: '/sales',
    content: 'Скидки',
  },
  {
    to: '/delivery_info',
    content: 'Доставка',
  },
  {
    to: '/',
    content: <img src="https://placehold.co/90?text=logo" alt="logo" />,
  },
  {
    to: '/recommendations',
    content: 'Рекомендации',
  },
  {
    to: '/cart',
    content: (
      <>
        <CartSVG width={20} />
        Корзина
      </>
    ),
  },
  {
    to: '/user',
    content: (
      <>
        <PersonSVG width={20} />
        Личный кабинет/Войти
      </>
    ),
  },
] as INavLinkRoutes[];
