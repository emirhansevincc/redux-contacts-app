import React from 'react'
import { contactSelector } from '../redux/contactSlice'
import { useSelector } from 'react-redux'
import ListItem from './ListItem'

function ContactList() {

  const getAllContacts = useSelector(contactSelector.selectAll)
  console.log(getAllContacts);

  return (
    <div>
      {
        getAllContacts.map((item) => {
          return (
            <ListItem 
              key={item.id} 
              item={item}
            />
          )
        })
      }
    </div>
  )
}

export default ContactList