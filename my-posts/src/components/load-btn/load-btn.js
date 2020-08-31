import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncPosts } from '../../redux/actions';
import './load-btn-styles.scss';

export const LoadBtn = () => {
  const dispatch = useDispatch();
  const handleFetchAsyncPost = () => dispatch(fetchAsyncPosts());

  return (
    <button
      className="load-btn"
      type="button"
      onClick={() => handleFetchAsyncPost()}
    >Загрузить</button>
  );
};
