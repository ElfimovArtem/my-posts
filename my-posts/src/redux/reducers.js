import { ADD_SYNC_POST, FETCH_ASYNC_POST } from './constants';

const initialState = {
  syncPosts: [],
  asyncPosts: [],
};

export const postsReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_SYNC_POST:
      return {
        ...state,
        syncPosts: [
          ...state.syncPosts,
          {
            text: payload.text,
            id: payload.id
          }
        ]
      };
    case FETCH_ASYNC_POST:
      return { ...state, asyncPosts: payload };
    default:
      return state;
  }
};
