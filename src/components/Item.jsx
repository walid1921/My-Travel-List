

function Item({ item, handleDeleteItems, handleCheck }) {
  return (
    <li className="overflow-hidden">
      <input type="checkbox" value={item.packed} onChange={() => handleCheck(item._id)} />
      <span className={item.packed ? 'line-through' : ''}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDeleteItems(item._id)}>❌</button>


    </li>
  )
}


export default Item
