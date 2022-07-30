import { 
    createSlice, 
    createEntityAdapter 
} from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter()
const initialState = contactAdaptor.getInitialState()

export const contactSelector = contactAdaptor.getSelectors((state) => state.contacts)

export const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: contactAdaptor.addOne,
        deleteItem: contactAdaptor.removeOne,
        clearAllItems: contactAdaptor.removeAll,
        updateItem: contactAdaptor.updateOne
    }
})

export const {
    addContact,
    deleteItem,
    clearAllItems,
    updateItem,
} = contactSlice.actions

export default contactSlice.reducer