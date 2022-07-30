import React, { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { addContact, clearAllItems } from '../redux/contactSlice'
import { contactSelector } from '../redux/contactSlice'
import { useSelector } from 'react-redux'

function ContactsForm() {

  const [name, setName] = useState("")
  const [number, setNumber] = useState("")

  const contacts = useSelector(contactSelector.selectTotal)
  // console.log(contacts);

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!name || !number){
      return false
    }

    dispatch(addContact({
      id: nanoid(),
      name: name,
      number: number
    }))

    setName("")
    setNumber("")
  }

  const clearAll = () => {
    dispatch(clearAllItems())
  }

  return (
    <div>

      {
        contacts > 0 ? (
        <div className="clearAll">
          <button onClick={clearAll} >Clear all contacts</button>
        </div>  
        ) : ""
      }

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

export default ContactsForm