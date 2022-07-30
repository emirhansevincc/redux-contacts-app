import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'
import { updateItem } from '../redux/contactSlice'

function EditContactItem({ getItemById }) {

    const [name, setName] = useState(getItemById.name)
    const [number, setNumber] = useState(getItemById.number)

    const dispatch = useDispatch()

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || !number){
            return false
        }
        dispatch(updateItem(
            {
                id: getItemById.id,
                changes:{
                    name: name,
                    number: number
                }
            }
        ))
        history('/');
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className={"container"}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button className='submit' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EditContactItem