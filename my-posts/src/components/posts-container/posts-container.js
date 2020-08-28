import React from 'react';
import { SyncPostsContainer } from '../../containers/sync-posts-container';
import { AsyncPostsContainer } from '../../containers/async-posts-container';
import './posts-container-styles.scss';

export const PostsContainer = () => (
  <div className="posts-container">
    <SyncPostsContainer />
    <AsyncPostsContainer />
  </div>
);
