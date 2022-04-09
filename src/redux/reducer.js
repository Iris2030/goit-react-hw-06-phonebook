import { combineReducers } from "redux"
import types from "./types"

const initialState = 
{
    contacts: JSON.parse(localStorage.getItem('contacts')) ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: ''
}


const contacts = (state = initialState.contacts, {type, payload}) =>{

  switch (type){
case types.ADD:
  return [...state, payload]

  case types.DELETE:
    return state.filter(contact => contact.id !== payload)

    default: 
    return state
  }
}

const filter = (state = initialState.filter, {type, payload}) =>{
  switch (type){
    case  types.CHANGE_FILTER:
      return payload;
    
        default: 
        return state
      }
}


export default combineReducers({
contacts,
filter
})