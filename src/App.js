import "./App.css";
import { UserContext } from "./context/User";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Article from "./components/Article";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import PostComment from "./components/PostComment";
import User from "./components/User";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Nav />
              <Home />
            </Route>
            <Route exact path="/topics/:topic">
              <Nav />
              <Home />
            </Route>
            <Route exact path="/articles/:article_id">
              <Article />
            </Route>
            <Route exact path="/articles/:article_id/comments">
              <PostComment />
            </Route>
            <Route exact path="/users">
              <User />
            </Route>
            <Route>
              <p>A wild error has appeared!!</p>
            </Route>
          </Switch>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
