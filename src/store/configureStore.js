import {createStore, applyMiddleware, compose} from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(rootReducer, composeEnhancers(
      applyMiddleware(
          thunk
      )
  ));
}
