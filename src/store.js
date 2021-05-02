import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { contactReducer } from './components/Reducers/contact-reducers'


// Creating Store
const store = createStore(contactReducer, composeWithDevTools())
combineReducers({
  contacts: contactReducer
})


export default store