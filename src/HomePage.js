import styled from "styled-components";
import React from "react";
import { Grid } from "semantic-ui-react";
import EventFilters from "./EventFilters";
import EventList from "./EventList";
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 200px;
`;
const HomePage = () => {
  return (
    <Wrapper>
      <EventFilters />
      <EventList />
    </Wrapper>
  );
};

export default HomePage;
