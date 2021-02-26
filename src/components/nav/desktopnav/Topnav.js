import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import logo from "../../../assets/svg/logo.svg";
import SignInMenu from "./SignInMenu";
import SignOutMenu from "./SignOutMenu";

const TopnavWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: rgba(100, 142, 153);
`;
const LinkItemsWrapper = styled.div`
  display: flex;
`;
const Logo = styled.div`
  background: url(${logo}) center no-repeat;
  background-size: 100%;
  width: 200px;
  margin-left: 1rem;
  cursor: pointer;
`;
const LinkItem = styled(NavLink)`
  color: black;
  cursor: pointer;
`;
const Button = styled.button`
  background-color: red;
`;
const Topnav = () => {
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <TopnavWrapper>
      <LinkItemsWrapper>
        <Logo />
        <LinkItem activeclass="active" to="/">
          Home
        </LinkItem>
        {authenticated && (
          <LinkItem to="/createEvent">
            <Button>Create Event</Button>
          </LinkItem>
        )}
        {authenticated ? <SignInMenu /> : <SignOutMenu />}
      </LinkItemsWrapper>
    </TopnavWrapper>
  );
};

export default Topnav;
