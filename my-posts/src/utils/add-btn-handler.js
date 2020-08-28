import { addSyncPost } from '../redux';

export const addBtnHandler = (post, setPost, myDispatch) => {
  const handleAddSyncPost = (el) => myDispatch(addSyncPost(el));
  if (post.trim()) {
    handleAddSyncPost(post);
  }
  setPost('');
};
