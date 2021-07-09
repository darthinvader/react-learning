import React, { useEffect, useState } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [error, setError] = useState(false);
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
        setError(true);
      });
  }, []);

  const postSelected = (id) => {
    setSelectedPostId(id);
  };
  let postElements = (
    <p style={{ textAlign: "center" }}>Something went wrong</p>
  );
  if (!error) {
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
  }

  return (
    <div>
      <section className="Posts">{postElements}</section>
      <section>
        <FullPost id={selectedPostId} />
      </section>
      <section>
        <NewPost />
      </section>
    </div>
  );
};

export default Blog;
