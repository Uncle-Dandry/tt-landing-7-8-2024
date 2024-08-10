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

import { MainLayout } from 'components/_layouts';

import 'styles/globals.scss';

import './App.scss';

const basename = process.env?.REACT_APP_PUBLIC_URL || '/';

const router = createBrowserRouter(
  [{
    path: basename,
    element: <MainLayout />,
    children: [
      {
        path: HOME_PAGE,
        element: basename,
      },
    ],
  }],
);

const App = () => {
  return (
    <Provider store={store}>
      <a id="unicreallyunicdsds" href={process.env.REACT_APP_PUBLIC_URL}>
        {process.env.REACT_APP_PUBLIC_URL}
      </a>

      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
