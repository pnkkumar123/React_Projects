import React, { useState } from 'react';
import styled from 'styled-components';
import { useNewsData } from '../Context/DataApi';

const Navbar = () => {
  // const { articles } = useNewsData();
  // const [isCategoryDropDownOpen, setCategoryDropDownOpen] = useState(false);
  // const [isCountryDropDownOpen, setCountryDropDownOpen] = useState(false);

  // const handleCategoryHover = () => {
  //   setCategoryDropDownOpen(true);
  //   setCountryDropDownOpen(false);
  // };

  // const handleCountryHover = () => {
  //   setCountryDropDownOpen(true);
  //   setCategoryDropDownOpen(false);
  // };

  // const handleMouseLeave = () => {
  //   setCountryDropDownOpen(false);
  //   setCategoryDropDownOpen(false);
  // };

  return (
    <Wrapper>
      
      <Line />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;

  .navbar {
    display: flex;
    flex-direction: row;
    gap: 30px;
    list-style: none;
  }

  .dropdown-container {
    position: relative;
  }

  .category-data,
  .country-data {
    cursor: pointer;
    position: relative;
  }

  .dropdown-menu {
    margin-top: 15px;
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid #ddd;
    list-style: none;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    display: none;
  }

  .category-data:hover + .dropdown-menu,
  .country-data:hover + .dropdown-menu,
  .category-menu:hover,
  .country-menu:hover {
    display: block;
  }

  .category-menu,
  .country-menu {
    background-color: #eaffea; /* Very light green for dropdown menu */
  }
`;

// Styled component for the horizontal line
const Line = styled.hr`
  width: 100%;
  border: 1px solid lightgreen; /* Adjust the color of the horizontal line */
  margin-top: 20px; /* Adjust the spacing above the line */
`;

export default Navbar;


