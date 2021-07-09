import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import classes from "./Posts.module.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
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
  }, []);

  const postSelected = (id) => {
    setSelectedPostId(id);
  };

  let postElements = (
    <p style={{ textAlign: "center" }}>Something went wrong</p>
  );

  postElements = posts.map((post) => {
    return (
      <Post
        key={post.id}
        title={post.title}
        author={post.author}
        clicked={() => postSelected(post.id)}
      />
    );
  });

  return <section className={classes.Posts}>{postElements}</section>;
};

export default Posts;
