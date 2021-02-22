import React from "react";
import styled from "styled-components";
import Topnav from "./Topnav";

const Wrapper = styled.div`
  position: relative;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Topnav />
    </Wrapper>
  );
};

export default Navbar;
