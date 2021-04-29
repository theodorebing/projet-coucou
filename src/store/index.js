/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';

import authMiddleware from 'src/middlewares/auth';
import familyMiddleware from 'src/middlewares/family';
import storiesMiddleware from 'src/middlewares/stories';
import rootReducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    authMiddleware,
    familyMiddleware,
    storiesMiddleware,
  ),
);

const store = createStore(rootReducer, enhancers);

export default store;
