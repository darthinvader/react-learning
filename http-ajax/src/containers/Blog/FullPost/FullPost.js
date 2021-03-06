import React, { useEffect, useState } from "react";
import axios from "axios";

import "./FullPost.css";

const FullPost = (props) => {
  const [loadedPost, setLoadedPost] = useState(null);
  useEffect(() => {
    console.log(props);
    if (props.match.params.id) {
      axios.get(`/posts/${props.match.params.id}`).then((response) => {
        // console.log(response);
        setLoadedPost(response.data);
      });
    }
  }, [props]);

  const deletePostHandler = () => {
    axios.delete(`/posts/${props.id}`).then((response) => {
      console.log(response);
    });
  };

  let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
  if (props.id) {
    post = <p style={{ textAlign: "center" }}>loading...</p>;
  }
  if (loadedPost) {
    post = (
      <div className="FullPost">
        <h1>{loadedPost.title}</h1>
        <p>{loadedPost.body}</p>
        <div className="Edit">
          <button onClick={deletePostHandler} className="Delete">
            Delete
          </button>
        </div>
      </div>
    );
  }

  return post;
};

export default FullPost;
