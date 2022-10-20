import React, { useState } from "react";

import PostList from "./PostList";
import {Counter} from "./Counter";



const Main = ({posts, addPost}) => {
 
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [count, setCount] = useState(4)

  const addNewPost = () => {
      setCount(count + 1)
    const newPost = { id: count, title: postTitle, body: postBody };
    addPost(newPost)
    setPostTitle('')
    setPostBody('')
  };

  const onChangeTitle = (e) => {
      console.log(e.target.value)
    setPostTitle(e.target.value);
  };
  const onChangeBody = (e) => {
      console.log(e.target.value)
      setPostBody(e.target.value);
  };

  return (
    <div className="main">
        <Counter />
        <PostList arrayPost={posts} />
      <div>
        <input value={postTitle} onChange={onChangeTitle} />
        <input value={postBody} onChange={onChangeBody} />
      </div>
      <div>
        <button onClick={addNewPost}> Add post </button>
      </div>
    </div>
  );
};

export default Main;
