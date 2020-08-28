import { ADD_SYNC_POST } from './constants';

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
    default:
      return state;
  }
};
