import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Article from "./components/Article";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import PostComment from "./components/PostComment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/articles">
            <Article />
          </Route>
          <Route exact path="/postcomment">
            <PostComment />
          </Route>
          <Route>
            <p>A wild error has appeared!!</p>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
