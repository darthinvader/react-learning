import React from "react";
// import axios from "axios";
import Posts from "../Posts/Posts";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="Blog">
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">New Post</a>
            </li>
          </ul>
        </nav>
      </header>
      <Posts />
    </div>
  );
};

export default Blog;
