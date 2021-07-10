import React, { useState, useEffect } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import classes from "./Posts.module.css";
import { Route } from "react-router";
import FullPost from "../Blog/FullPost/FullPost";

const Posts = (props) => {
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
  }, [props]);

  const postSelectedHandler = (id) => {
    props.history.push({ pathname: "/posts/" + id });
    // setSelectedPostId(id);
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
        clicked={() => postSelectedHandler(post.id)}
      />
    );
  });

  return (
    <div>
      <section className={classes.Posts}>{postElements}</section>

      <Route path={props.match.url + "/:id"} exact component={FullPost} />
    </div>
  );
};

export default Posts;
