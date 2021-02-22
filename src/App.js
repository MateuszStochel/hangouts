import React from "react";
import { Route, Switch } from "react-router";
import { Container } from "semantic-ui-react";

import "./App.css";
import HomePage from "./HomePage";

function App() {
  return (
    <Container>
      <Navbar component={Navbar} />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Container>
  );
}

export default App;
