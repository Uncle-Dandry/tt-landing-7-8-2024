import React from 'react';
import { Provider } from 'react-redux';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import store from 'store';

import HomePage from 'pages/index';

import { MainLayout } from 'components/_layouts';

import 'styles/globals.scss';

import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </Provider>
  );
};

export default App;
