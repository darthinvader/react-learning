import React from "react";

import "./FullPost.css";

const FullPost = (props) => {
  let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
  if (props.id) {
    post = (
      <div className="FullPost">
        <h1>Title</h1>
        <p>Content</p>
        <div className="Edit">
          <button className="Delete">Delete</button>
        </div>
      </div>
    );
  }

  return post;
};

export default FullPost;
