import React from "react";
// import axios from "axios";
import { Route } from "react-router-dom";

import Posts from "../Posts/Posts";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="Blog">
      <header>
        <nav>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/new-post">New Post</a>
            </li>
          </ul>
        </nav>
      </header>
      {/* <Route path="/" exact render={() => <h1>Home</h1>} />
      <Route path="/" render={() => <h1>Home2</h1>} /> */}
      <Route path="/" exact component={Posts} />
    </div>
  );
};

export default Blog;
