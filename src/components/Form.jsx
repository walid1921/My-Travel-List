import { useState } from "react"
import { BsFillBagHeartFill } from 'react-icons/bs';


function Form({ handleAddItems }) {

  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)
  // the goal of this is to add new item to the array
  // const [items, setItems] = useState([])
  // We had to Lift it to parent Component so that we can use it in another sibling component (Now its in the App())


  // Function responsible for taking the input data and clear it
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!description) return;

    // To combine all data in one object
    const newItem = { 
      description, 
      quantity, 
      packed: false, 
      id: Date.now() 
    }
    console.log(newItem)

    // To pass the item data in handleAddItems() its down
    handleAddItems(newItem)

    // To clear the input or Change the value
    setDescription('')
    setQuantity(1)
  }

  // Listening to user input with onChange()
  const descriptionChangeHandler = e => setDescription(e.target.value)

  // Listening to user input (if its Number you have to convert it to number)
  const quantityChangeHandler = e => setQuantity(Number(e.target.value))




  return (
    <form className="add-form" onSubmit={handleSubmit}>

      <h3>What do you need for 👜 your trip? </h3>

      <select value={quantity} onChange={quantityChangeHandler}>

        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => <option value={num} key={num}>{num}</option>)}

      </select>


      <input type="text" placeholder="Item..." value={description} onChange={descriptionChangeHandler} />


      <button>Add</button>
    </form>
  )
}

export default Form
