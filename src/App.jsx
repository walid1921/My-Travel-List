import { useState } from "react"

import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import initialItems from "./assets/data";

export default function App() {
  const [items, setItems] = useState([])



  // TO ADD ITEM
  const handleAddItems = (item) => {
    setItems(items => [...items, item])
  }

  // TO DELETE ITEM BASED ON ITS ID
  const handleDeleteItems = (id) => {
    setItems(items => items.filter(item => item.id !== id))
  }

  // TO CHECK ITEM BASED ON ITS ID
  const handleCheck = (id) => {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  // To clear the list with confirm window
  const handleClear = () => {
    const confirmed = window.confirm('Are you sure you want to delete all items')

    if (confirmed) setItems([])
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList initialItems={initialItems} items={items} handleDeleteItems={handleDeleteItems} handleCheck={handleCheck} handleClear={handleClear} />
      <Stats items={items} />
    </div>
  )
}