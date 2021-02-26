import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { openModal } from "../../../store/actions/modalAction";

const Button = styled.button`
  padding: 10px 15px;
  margin-right: 10px;
  font-size: 20px;
  border: none;
  color: white;
  background: transparent;
  box-shadow: 0 0 2px black;
  outline: none;
`;

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
