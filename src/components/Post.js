import React from "react";
import "../App.css";

const Post = ({ post, ...props }) => { 
  return (
    <div className="post">
      <div> {post.title} </div>
      <div> {post.body} </div>
    </div>
  );
};

export default Post;
