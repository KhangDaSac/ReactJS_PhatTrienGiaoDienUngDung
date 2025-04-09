
import { useState, useEffect } from 'react';
import MenuList from '../components/MenuList';
import { useMenu } from '../context/MenuContext';
const Menu = () => {
  const { menuItems } = useMenu();

  return (
    <MenuList items={menuItems} />
  );
};

export default Menu;
