import React, { useEffect, useState } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      const currPosts = response.data.slice(0, 4);
      const updatedPosts = currPosts.map((post) => {
        return { ...post, author: "Max" };
      });
      setPosts(updatedPosts);
      // console.log(response);
    });
  }, []);

  const postElements = posts.map((post) => {
    return <Post key={post.id} title={post.title} author={post.author} />;
  });

  return (
    <div>
      <section className="Posts">{postElements}</section>
      <section>
        <FullPost />
      </section>
      <section>
        <NewPost />
      </section>
    </div>
  );
};

export default Blog;
