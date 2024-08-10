import React from 'react';
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { HOME_PAGE } from 'constants/routes';

import store from 'store';

import HomePage from 'pages/index';

import { MainLayout } from 'components/_layouts';

import 'styles/globals.scss';

import './App.scss';

const router = createHashRouter(
  [{
    path: HOME_PAGE,
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
    ],
  }],
);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
