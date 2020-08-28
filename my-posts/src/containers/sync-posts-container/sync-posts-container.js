import React from 'react';
import { Post } from '../../components/post';
import { useSelector } from 'react-redux';
import { NoPostsBlock } from '../../components/no-posts-block';

export const SyncPostsContainer = () => {
  const syncPosts = useSelector(state => state.syncPosts);

  if(syncPosts.length > 0 ) {
    return (
      <div className="posts-container__sync-posts">
        {
          syncPosts.map(post => <Post title={post.text} key={post.id} />)
        }
      </div>
    );
  } else {
    return (
      <div className="posts-container__sync-posts">
        <NoPostsBlock />
      </div>
    )
  }
};
