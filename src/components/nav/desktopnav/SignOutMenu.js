import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { openModal } from "../../../store/actions/modalAction";

const Button = styled.button``;

const SignOutMenu = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(openModal({ modalType: "LoginForm" }))}>
        Login
      </Button>
      <Button
        onClick={() => dispatch(openModal({ modalType: "RegisterForm" }))}
      >
        Register
      </Button>
    </div>
  );
};

export default SignOutMenu;
