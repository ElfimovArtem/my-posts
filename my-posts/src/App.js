import React from 'react';
import { PostsContainer } from './components/posts-container';
import { Form } from './components/form';
import './App-styles.scss'

export const App = () => (
  <div className="wrapper">
    <h1 className="wrapper__title">Работа с React-Redux</h1>
    <Form />
    <PostsContainer />
  </div>
);
