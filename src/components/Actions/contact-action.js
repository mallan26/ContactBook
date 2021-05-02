import {CLEAR_CONTACT, CREATE_CONTACT, DELETE_CONTACT, DELETE_SELECTED, GET_CONTACT, SELECT_CONTACT, UPDATE_CONTACT} from '../../constant/types'

//Action Creators
export const addContact = (contact) => ({
      type : CREATE_CONTACT,
      payload : contact
    })

  // get a action 
  export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id
  })

  //Update contact
  export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact
  })

  //delete contact
  export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id
  })
  
  // Select all contact
  export const selectAllContacts = (id) => ({
    type: SELECT_CONTACT,
    payload: id
  })
  

  //clear selected contacts
  export const clearAllContacts = () => ({
    type: CLEAR_CONTACT

  })

  //DELETE SELECTED
  export const deleteSelected = () => ({
    type: DELETE_SELECTED 

  })
  
  