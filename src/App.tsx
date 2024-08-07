import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';

import store from 'store';

import { HOME_PAGE } from 'constants/routes';

import { MainLayout } from 'layouts';

import './App.scss';

const router = createBrowserRouter([
  {
    path: HOME_PAGE,
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <div></div>,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
