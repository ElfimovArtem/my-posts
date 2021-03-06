import React, { useState } from 'react';
import { addBtnHandler } from '../../utils';
import { useDispatch } from 'react-redux';
import './form-styles.scss';

export const Form = () => {
  const [post, setPost] = useState('');
  const dispatch = useDispatch();

  return (
    <form className="form">
      <input
        className="form__input"
        type="text"
        autoComplete="off"
        placeholder="Введите тескт поста"
        value={post}
        onChange={(ev) => setPost(ev.target.value)}
      />
      <button
        type="button"
        className="form__btn"
        onClick={() => addBtnHandler(post, setPost, dispatch)}
      >Добавить</button>
    </form>
  );
};
