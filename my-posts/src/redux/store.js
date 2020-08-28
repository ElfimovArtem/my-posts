import { createStore, compose } from 'redux';
import { postsReducers } from './reducers';

export const store = createStore(postsReducers, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
