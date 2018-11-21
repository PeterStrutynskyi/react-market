import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootModule from '../modules/rootModule';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, rootModule);


export const store = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(reduxThunk)
  )
);

export const persistor = persistStore(store);






