import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'
import { contactSelector } from '../redux/contactSlice'
import EditContactItem from './EditContactItem'

function EditContact() {

    const { id } = useParams()
    
    const getItemById = useSelector((state) => contactSelector.selectById(state, id))

  return (
    <div>
        <EditContactItem getItemById={getItemById}  />
    </div>
  )
}

export default EditContact