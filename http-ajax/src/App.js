import React from "react";
import { BrowserRouter } from "react-router-dom";
import Blog from "./containers/Blog/Blog";

const App = () => {
  return (
    // basename of url example
    <BrowserRouter basename="/my-app">
      <div className="App">
        <Blog />
      </div>
    </BrowserRouter>
  );
};

export default App;
