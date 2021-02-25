import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import checkIcon from "./assets/svg/check.svg";

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
  width: 20px;
  height: 20px;
  border: 1px solid #ddd;
  border-radius: 2px;
  overflow: hidden;
  &:after {
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    width: 20px;
    height: 20px;
    background: url(${checkIcon}) center no-repeat;
    background-size: 70%;
    background-color: blue;
  }
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
const Button = styled.button``;
const categories = ["Drinks", "Culture", "Film", "Food", "Music", "Travel"];

const CategoriesFilters = ({ onClickCheckbox, selectedCategories }) => {
  const { events } = useSelector((state) => state.events);

  return (
    <Wrapper>
      {categories.map((category) => (
        <CategoryWrapper
          key={category}
          onClick={() => onClickCheckbox(category)}
        >
          <Checkmark
            isActive={selectedCategories?.some(
              (selectedCategory) => selectedCategory === category
            )}
          />
          <Category>{`${category} `}</Category>
        </CategoryWrapper>
      ))}
      <Button>Filter</Button>
      <Button>Clear</Button>
    </Wrapper>
  );
};

export default CategoriesFilters;
