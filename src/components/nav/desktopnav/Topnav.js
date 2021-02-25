import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { signOutFirebase } from "../../../firestore/firestoreService";
import SignInMenu from "./SignInMenu";
import SignOutMenu from "./SignOutMenu";

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
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <TopnavWrapper>
      <LinkItemsWrapper>
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
