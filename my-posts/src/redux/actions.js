import { ADD_SYNC_POST } from './constants';

export const addSyncPost = (post) => {
  return {
    type: ADD_SYNC_POST,
    payload: {
      text: post,
      id: Date.now()
    }
  }
};
