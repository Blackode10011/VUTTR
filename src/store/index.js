import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage/session';

import allReducers from '../reducers';

const persistConfig = {
  key: 'vuttrStorage',
  storage,
};

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = createStore(
  persistedReducer,
  applyMiddleware(thunk),
);

const persitor = persistStore(store);

export { store, persitor };
