import React from "react";
import { Route, Switch } from "react-router";
import { Container } from "semantic-ui-react";

import "./App.css";
import EventForm from "./EventForm";
import HomePage from "./HomePage";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <Container>
      <Navbar component={Navbar} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/createEvent" component={EventForm} />
      </Switch>
    </Container>
  );
}

export default App;
