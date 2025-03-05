import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import ListItem from './components/items/list-item/ListItem'

function App() {
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://67c83e170acf98d0708592a6.mockapi.io/item');
        const data = await response.json();
        setListItem(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(listItem);
  }, [listItem]);

  return (
    <>
      <Navbar></Navbar>
      <ListItem listItem={listItem}></ListItem>
    </>
  )
}

export default App
