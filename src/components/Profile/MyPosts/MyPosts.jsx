import React from "react";
import c from "./MyPosts.module.css";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "./../../../redux/profile-reduser";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((p) => (
    <Post message={p.message} like={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={c.postsBlock}>
      <h3>New post</h3>
      <div>
        <textarea
          ref={newPostElement}
          onChange={onPostChange}
          value={props.newPostText}
        />
      </div>
      <div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={c.post}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
