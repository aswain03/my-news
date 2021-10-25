import "./App.css";
import { UserContext } from "./context/User";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Article from "./components/Article";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [signIn, setSignIn] = useState(null);

  return (
    <UserContext.Provider value={{ signIn, setSignIn }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/topics/:topic">
              <Home />
            </Route>
            <Route exact path="/articles/:article_id">
              <Article />
            </Route>
            <Route>
              <p>A wild error has appeared!!</p>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
