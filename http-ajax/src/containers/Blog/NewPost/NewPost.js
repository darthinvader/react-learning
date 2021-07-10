import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import "./NewPost.css";

const NewPost = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("Max");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // console.log(props);
  }, [props]);

  const postDataHandler = () => {
    const data = {
      title: title,
      body: content,
      author: author,
    };
    axios.post("/posts", data).then((response) => {
      setSubmitted(true);
      console.log(response);
    });
  };

  return (
    <div className="NewPost">
      {submitted && <Redirect to="/posts" />}
      <h1>Add a Post</h1>
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label>Content</label>
      <textarea
        rows="4"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <label>Author</label>
      <select
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
      >
        <option value="Max">Max</option>
        <option value="Manu">Manu</option>
      </select>
      <button onClick={postDataHandler}>Add Post</button>
    </div>
  );
};

export default NewPost;
