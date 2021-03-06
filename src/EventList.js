import React from "react";
import styled from "styled-components";
import CategoriesFilters from "./CategoriesFilters";
import Input from "./components/UI/Input";

const Wrapper = styled.div`
  width: 40%;
`;

const Heading = styled.h2`
  width: 100%;
`;

const EventList = ({ onClickCheckbox, selectedCategories }) => {
  return (
    <Wrapper>
      <Input />
      <Heading>Categories</Heading>
      <CategoriesFilters
        selectedCategories={selectedCategories}
        onClickCheckbox={onClickCheckbox}
      />
    </Wrapper>
  );
};

export default EventList;
