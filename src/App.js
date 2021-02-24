import React from "react";
import { Route, Switch } from "react-router";

import "./App.css";
import EventForm from "./EventForm";
import HomePage from "./HomePage";
import Navbar from "./components/nav/Navbar";
import ModalManager from "./Modals/ModalManager";
import Backdrop from "./Modals/Backdrop";

import styled from "styled-components";

const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <ModalManager />
      <Backdrop />
      <Navbar component={Navbar} />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/createEvent" component={EventForm} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
