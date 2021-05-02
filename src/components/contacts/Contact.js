import React from 'react'
import Avatr from 'react-avatar'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteContact } from '../Actions/contact-action'

const Contact = ({contact, selectAll}) => {
    const { name, email, phone, id} = contact
    const dispatch = useDispatch()
   
    return (
        <tr>
            <td>
                <div className="custom-control custom-checkbox">
                <input type="checkbox" checked={selectAll} className="custom-control-input" />
                <label className="custom-control-label"> </label>
            </div>
            </td>
            <td><Avatr className="mr-2" name={name} size="45" round={true} key={id} />{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
                <Link to={`/edit-contact/${id}`}>  <span className="material-icons mr-2 "> edit </span> </Link>
                 <span className="material-icons mr-2 text-danger" onClick={() => dispatch(deleteContact(id))}> remove_circle </span> 
            </td>
        </tr>
    )
}

export default Contact
