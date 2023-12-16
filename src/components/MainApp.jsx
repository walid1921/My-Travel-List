import { useState, useEffect } from "react";
import axios from 'axios';
import Form from "../components/Form";
import Logo from "./Header";
import PackingList from "../components/PackingList";
import Stats from "../components/Stats";
import User from "./User";
// import initialItems from "./assets/data";



// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const BACKEND_URL = 'http://localhost:5000/api';







function MainApp() {
  const [items, setItems] = useState([]);


  const handleAddItems = async (item) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/items`, item);
      setItems([...items, response.data]);
    } catch (error) {
      console.error('Error adding item:', error.message);
    }
  };

  const handleDeleteItems = async (id) => {
    try {
      await axios.delete(`${BACKEND_URL}/items/${id}`);
      setItems((items) => items.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Error deleting item:', error.message);
    }
  };

  const handleCheck = async (id) => {
    try {
      const updatedItems = items.map(item =>
        item._id === id ? { ...item, packed: !item.packed } : item
      );
      setItems(updatedItems);
      // Update the backend to mark item as packed
      await axios.put(`${BACKEND_URL}/items/${id}`, { packed: updatedItems.find(item => item._id === id).packed });
    } catch (error) {
      console.error('Error updating item:', error.message);
    }
  };

  const handleClear = async () => {
    const confirmed = window.confirm('Are you sure you want to delete all items');
    if (confirmed) {
      try {
        await axios.delete(`${BACKEND_URL}/items`);
        setItems([]);
      } catch (error) {
        console.error('Error clearing items:', error.message);
      }
    }
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/items`);
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error.message);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="app">
      <Logo text='Travel Time !' />
      <User />
      <Form handleAddItems={handleAddItems} />
      <PackingList items={items} handleDeleteItems={handleDeleteItems} handleCheck={handleCheck} handleClear={handleClear} />
      <Stats items={items} />
    </div>
  )
}

export default MainApp
