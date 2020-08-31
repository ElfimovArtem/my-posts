import { createStore, compose, applyMiddleware } from 'redux';
import { postsReducers } from './reducers';
import thunk from 'redux-thunk';

export const store = createStore(postsReducers, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
