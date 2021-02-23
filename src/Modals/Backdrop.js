import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { closeModal } from "../store/actions/modalAction";

const BackdropForModal = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const Backdrop = () => {
  const dispatch = useDispatch();
  const modalType = useSelector((state) => state.modal);

  return (
    <>
      {modalType ? (
        <BackdropForModal onClick={() => dispatch(closeModal())} />
      ) : null}
    </>
  );
};

export default Backdrop;
