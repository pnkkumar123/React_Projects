import React, { useState } from 'react';
import styled from 'styled-components';
import { useNewsData } from '../Context/DataApi';
import Filters from './Filters';

const HoverableSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const { articles } = useNewsData();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleCategoryMenu = () => {
    setIsCategoryOpen(!isCategoryOpen);
    setIsCountryOpen(false);
  };

  const toggleCountryMenu = () => {
    setIsCountryOpen(!isCountryOpen);
    setIsCategoryOpen(false);
  };

  return (
    <SidebarContainer isSidebarOpen={isSidebarOpen}>
      <MenuIcon onClick={toggleSidebar}>&#9776;</MenuIcon>
      {isSidebarOpen && (
        <MenuItemsContainer>
          <MenuItem onClick={toggleCategoryMenu}>Category</MenuItem>
          {isCategoryOpen && (
            <DropdownMenu>
              <Filters/>
            </DropdownMenu>
          )}
          <MenuItem onClick={toggleCountryMenu}>Country</MenuItem>
          {isCountryOpen && (
            <DropdownMenu>
              <MenuItem>Country 1</MenuItem>
              <MenuItem>Country 2</MenuItem>
              <MenuItem>Country 3</MenuItem>
            </DropdownMenu>
          )}
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
        </MenuItemsContainer>
      )}
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: ${(props) => (props.isSidebarOpen ? '200px' : '50px')};
  height: 100vh;
  background-color: lightblue;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

const MenuIcon = styled.div`
  color: #fff;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
`;

const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const DropdownMenu = styled.div`
  margin-top: 10px;
  width: 100%;
`;

const MenuItem = styled.div`
  padding: 10px;
  width: 100%;
  text-align: center;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

export default HoverableSidebar;

