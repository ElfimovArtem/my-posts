import React from 'react';
import { Post } from '../../components/post';
import { NoPostsBlock } from '../../components/no-posts-block';
import { LoadBtn } from '../../components/load-btn';
import { useSelector } from 'react-redux';

export const AsyncPostsContainer = () => {
  const asyncPosts = useSelector(state => state.asyncPosts);

  if(asyncPosts && asyncPosts.length > 0) {
    return (
      <div className="posts-container__async-posts">
        <div className="posts-container__sync-posts">
          {
            asyncPosts.map(post => <Post title={post.title} key={post.id} />)
          }
        </div>
      </div>
    );
  } else {
    return (
      <div className="posts-container__async-posts">
        <NoPostsBlock />
        <LoadBtn />
      </div>
    );
  }
};
