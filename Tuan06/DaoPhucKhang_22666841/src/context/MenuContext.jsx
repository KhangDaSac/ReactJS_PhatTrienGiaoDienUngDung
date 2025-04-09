import { createContext, useContext, useState } from 'react';
import phoBo from '../assets/images/pho-bo.png';
import goiCuon from '../assets/images/goi-cuon.png';
import comSuon from '../assets/images/com-suon.png';
import chaGio from '../assets/images/cha-gio.png';
import bunBo from '../assets/images/bun-bo.png';
import caKho from '../assets/images/ca-kho.png';

const MenuContext = createContext();

export const useMenu = () => {
   return useContext(MenuContext);
};

export const MenuProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState([
    {
      "id": 1,
      "name": "Phở Bò",
      "description": "Phở bò truyền thống với thịt bò tươi ngon",
      "price": 89000,
      "image": phoBo
    },
    {
      "id": 2,
      "name": "Gỏi Cuốn",
      "description": "Gỏi cuốn với tôm, thịt heo, rau sống, bún",
      "price": 65000,
      "image": goiCuon
    },
    {
      "id": 3,
      "name": "Cơm Sườn",
      "description": "Cơm với sườn thơm lừng",
      "price": 75000,
      "image": comSuon
    },
    {
      "id": 4,
      "name": "Chả Giò",
      "description": "Chả giò giòn rụm",
      "price": 55000,
      "image": chaGio
    },
    {
      "id": 5,
      "name": "Bún Bò",
      "description": "Bún bò Huế thơm nồng",
      "price": 85000,
      "image": bunBo
    },
    {
      "id": 6,
      "name": "Cá Kho",
      "description": "Cá kho đậm đà",
      "price": 95000,
      "image": caKho
    }
  ]);


  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems }}>
      {children}
    </MenuContext.Provider>
  );
}; 