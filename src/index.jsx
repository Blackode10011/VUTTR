import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './styles/index.scss';
import Routes from './routes';
import { store, persitor } from './store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persitor}>
      <Routes />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
