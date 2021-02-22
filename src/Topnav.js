import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const TopnavWrapper = styled.div`
  background-color: blue;
`;
const LinkItemsWrapper = styled.div`
  display: flex;
`;
const LinkItem = styled(NavLink)`
  color: black;
  cursor: pointer;
`;

const Topnav = () => {
  return (
    <TopnavWrapper>
      <LinkItemsWrapper>
        <LinkItem activeclass="active" to="/createEvent">
          Create Event
        </LinkItem>
        <LinkItem activeclass="active" to="/">
          Home
        </LinkItem>
      </LinkItemsWrapper>
    </TopnavWrapper>
  );
};

export default Topnav;
