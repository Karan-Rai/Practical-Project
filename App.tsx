import React from 'react';
import {Routes} from './src/Navigation/Routes';
import {Provider} from 'react-redux';
import configureStore from './src/Redux/store';

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
