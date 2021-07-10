import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Post from "../../components/Post/Post";
import classes from "./Posts.module.css";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    console.log(props);
    axios
      .get("/posts")
      .then((response) => {
        const currPosts = response.data.slice(0, 4);
        const updatedPosts = currPosts.map((post) => {
          return { ...post, author: "Max" };
        });
        setPosts(updatedPosts);
      })
      .catch((error) => {
        // setError(true);
        console.log(error);
      });
  }, [props]);

  const postSelected = (id) => {
    setSelectedPostId(id);
  };

  let postElements = (
    <p style={{ textAlign: "center" }}>Something went wrong</p>
  );

  postElements = posts.map((post) => {
    return (
      <Link key={post.id} to={"/" + post.id}>
        {" "}
        <Post
          title={post.title}
          author={post.author}
          clicked={() => postSelected(post.id)}
        />
      </Link>
    );
  });

  return <section className={classes.Posts}>{postElements}</section>;
};

export default Posts;
