import React from 'react';
import { BannerTop } from './containers/banner-top/BannerTop';
import { Main } from './containers/wrapper/Main';
import { GlobalStateProvider } from './context/GlobalState';

export const App = () => {
  return (
    <section className="container-fluid px-0 AppContainer">
      <GlobalStateProvider>

        <BannerTop />
        <Main />

      </GlobalStateProvider>
    </section>
  );
}
