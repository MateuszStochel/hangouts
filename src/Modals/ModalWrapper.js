import React from "react";
import { useDispatch } from "react-redux";
import { Modal } from "semantic-ui-react";
import styled from "styled-components";

import { closeModal } from "../store/actions/modalAction";

const Modals = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1000;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0 0 1px black;
`;
const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  margin-top: 15px;
`;
const ModalHeader = styled.h3`
  text-align: center;
  font-size: 20px;
`;
export default function ModalWrapper({ children, header }) {
  return (
    <Modals>
      {header && <ModalHeader>{header}</ModalHeader>}
      <ModalContent>{children}</ModalContent>
    </Modals>
  );
}
