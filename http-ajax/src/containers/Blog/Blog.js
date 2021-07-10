import React, { useState, Suspense, lazy } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import Posts from "../Posts/Posts";
import "./Blog.css";
const NewPost = lazy(() => import("./NewPost/NewPost"));

const Blog = () => {
  const [auth, setAuth] = useState(true);

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
      {auth && (
        <Suspense fallback={<div>Fuck</div>}>
          <Route path="/new-post" exact component={NewPost} />
        </Suspense>
      )}
      <Switch>
        <Route path="/posts" component={Posts} />
        <Redirect from="/" to="/posts" />
        {/* Catch all route below (404 cases :P)
        <Route render={() => <h1>Not Found!</h1>} /> */}

        {/* <Route path="/" component={Posts} /> */}
      </Switch>
    </div>
  );
};

export default Blog;
