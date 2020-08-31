import { ADD_SYNC_POST, FETCH_ASYNC_POST, asyncPostsUrl } from './constants';

export const addSyncPost = (post) => {
  return {
    type: ADD_SYNC_POST,
    payload: {
      text: post,
      id: Date.now()
    }
  }
};

export const fetchAsyncPosts = () => {
  return async dispatch => {
    const res = await fetch(asyncPostsUrl);
    const json = await res.json();
    dispatch({ type: FETCH_ASYNC_POST, payload: json })
  }
};
