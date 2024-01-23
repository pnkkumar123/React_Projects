import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useNewsData } from '../Context/DataApi';

const Header = () => {
  // const { setCategory } = useNewsData();

  return (
    <Wrapper>
      <div>
        <NavLink to='/'>Top-Headlines</NavLink>
        <NavLink to='/allnews'>General-News</NavLink>
        <NavLink to='/filters'>News</NavLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 50px;
  display: flex;
  margin-left: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  // position: fixed;
  top: 0;
  z-index: 1000;
  background-color: rgb(179, 235, 179);

  div {
    gap: 20px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
  }

  a {
    text-decoration: none;
    color: #333; // Adjust the color based on your design
    &:hover {
      color: #ff0000; // Change the color when hovered
    }
  }
`;

export default Header;
