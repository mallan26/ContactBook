import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContact, updateContact } from '../Actions/contact-action'
import {useHistory, useParams} from 'react-router-dom'

const EditContact = () => {
    let {id} = useParams()
    let history = useHistory()
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const contact = useSelector((state) => 
    state.contact
)

    useEffect(() => {
        if (contact != null){
            setName(contact.name)
            setPhone(contact.phone)
            setEmail(contact.email) 
        }
        dispatch(getContact(id))
    }, [contact])

   const onUpdateContact = (e) => {
       e.preventDefault()

       const update_contact = Object.assign(contact, {name : name, phone : phone, email:email}) 
       console.log(update_contact);
       dispatch(updateContact(update_contact))
       history.push("/")
   }


    return (
        <div className="card border-0 shadow">
            <div className="card-header"> Add a Contact </div>
                <div className="card-body">
                    <form onSubmit={(e) => onUpdateContact(e)}>
                        <div className="form-group">
                            <input type="text"
                                className="form-control"
                                placeholder="Enter Name"
                                value={name}

                                onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text"
                                className="form-control"
                                placeholder="Enter Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text"
                                className="form-control"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <button className="btn btn-warning" type="submit"> Update Contact  </button>
                    </form>
                </div>
            </div>
    );
};
export default EditContact

