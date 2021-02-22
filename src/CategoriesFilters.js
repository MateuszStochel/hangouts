import React from "react";
import styled from "styled-components";

const Wrapper = styled.ul`
  display: flex;
  padding: 0;
  flex-direction: column;
  list-style: none;
  width: 100%;
`;

const Category = styled.span`
  display: block;
  padding: 5px 0;
  color: inherit;
  font-size: 20px;
  text-decoration: none;
  margin-left: 15px;
`;
const Checkmark = styled.span`
  position: relative;
  display: block;
  width: 25px;
  height: 25px;
  border: 1px solid #ddd;
  border-radius: 2px;

  overflow: hidden;
`;
const CategoryWrapper = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  color: grey;
  transition: 0.2s;
  margin: 5px 0;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
const categories = ["All events", "match", "party", "party", "party"];

const CategoriesFilters = () => {
  return (
    <Wrapper>
      {categories.map((category, index) => (
        <CategoryWrapper key={category}>
          <Checkmark />
          <Category>{`${category} (${index})`}</Category>
        </CategoryWrapper>
      ))}
    </Wrapper>
  );
};

export default CategoriesFilters;
