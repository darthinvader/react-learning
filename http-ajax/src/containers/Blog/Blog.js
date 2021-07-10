import React, { useState } from "react";
// import axios from "axios";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import Posts from "../Posts/Posts";
import "./Blog.css";
import NewPost from "./NewPost/NewPost";

const Blog = () => {
  const [auth, setAuth] = useState(false);

  return (
    <div className="Blog">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/posts"
                exact
                activeClassName="my-active"
                activeStyle={{ color: "#fa923f", textDecoration: "underline" }}
              >
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: "/new-post",
                  hash: "#submit",
                  search: "?quick-submit=true",
                }}
              >
                New Post
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {/* <Route path="/" exact render={() => <h1>Home</h1>} />
      <Route path="/" render={() => <h1>Home2</h1>} /> */}

      <Switch>
        {auth && <Route path="/new-post" component={NewPost} />}
        <Route path="/posts" component={Posts} />
        <Redirect from="/" to="/posts" />
        {/* <Route path="/" component={Posts} /> */}
      </Switch>
    </div>
  );
};

export default Blog;
