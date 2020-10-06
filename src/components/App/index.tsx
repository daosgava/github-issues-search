import React, { ReactElement } from 'react';
import { Header, AppContainer } from '../shared/';
import InputSearch from '../InputSearch';
import './App.css';

const App = (): ReactElement => {
  return (
    <AppContainer>
      <Header />
      <InputSearch />
    </AppContainer>
  );
}

export default App;
