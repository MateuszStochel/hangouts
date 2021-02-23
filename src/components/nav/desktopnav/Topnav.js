import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { openModal } from "../../../store/actions/modalAction";

const TopnavWrapper = styled.div``;
const LinkItemsWrapper = styled.div`
  display: flex;
`;
const LinkItem = styled(NavLink)`
  color: black;
  cursor: pointer;
`;
const Button = styled.button`
  background-color: red;
`;
const Topnav = () => {
  const dispatch = useDispatch();
  return (
    <TopnavWrapper>
      <LinkItemsWrapper>
        <LinkItem activeclass="active" to="/createEvent">
          Create Event
        </LinkItem>
        <LinkItem activeclass="active" to="/">
          Home
        </LinkItem>
        <Button onClick={() => dispatch(openModal({ modalType: "LoginForm" }))}>
          Login
        </Button>
        <Button
          onClick={() => dispatch(openModal({ modalType: "RegisterForm" }))}
        >
          Register
        </Button>
      </LinkItemsWrapper>
    </TopnavWrapper>
  );
};

export default Topnav;
