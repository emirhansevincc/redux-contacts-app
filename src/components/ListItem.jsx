import React from 'react'
import { deleteItem } from '../redux/contactSlice'
import { useDispatch } from 'react-redux/es/exports'
import { Link } from 'react-router-dom'


function ListItem({ item }) {

  const dispatch = useDispatch()

  const buttonClick = () => {
    dispatch(deleteItem(item.id))
  }

  return (
    <div className='item'>
      <div>
        <h4>{item.name}  /  {item.number}</h4>  
      </div>
      <div>
        <button 
          className='btn'
          onClick={buttonClick}
          >X</button>
        <button 
          className='btn'
        ><Link to={`edit/${item.id}`}>Edit</Link></button> 
      </div>
    </div>
  )
}

export default ListItem