import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import store from 'store';

import { HOME_PAGE } from 'constants/routes';

import HomePage from 'pages/index';

import { MainLayout } from 'components/_layouts';

import 'styles/globals.scss';

import './App.scss';

const router = createBrowserRouter(
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
  {
    basename: '/',
  },
);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
