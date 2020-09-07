import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
  return (
    <div className={c.item}>
      <img src="https://www.wallpaperup.com/uploads/wallpapers/2016/04/04/922941/b10213790b1a7e1ea8b00293076e4032-1000.jpg" alt="" />
      {props.message}
      <div>like {props.like}</div>
    </div>
  )
}

export default Post;