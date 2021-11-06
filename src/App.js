import "./App.css";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global";
import { UserContext } from "./context/User";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Article from "./components/Article";
import Header from "./components/Header";
import Home from "./components/Home";
import { Container } from "./styles/Container.styled";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  const [signIn, setSignIn] = useState(null);

  return (
    <UserContext.Provider value={{ signIn, setSignIn }}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <Container>
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
            </Container>
          </>
        </ThemeProvider>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
