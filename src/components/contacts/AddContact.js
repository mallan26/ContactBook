import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../Actions/contact-action'
import shortid from "shortid"
import {useHistory} from 'react-router-dom'

const AddContact = () => {
    let history = useHistory()
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const createContact = (e) => {
        e.preventDefault();
        const formData = {
            id:shortid.generate(),
            name: name,
            phone: phone,
            email: email
        };
        dispatch(addContact(formData))
        history.push("/")
        console.log(formData)
    };
    //console.log(name, phone, email)
    //dispatch(addContact(formData))

    return (
        <div className="card border-0 shadow">
            <div className="card-header"> Add a Contact </div>
                <div className="card-body">
                    <form onSubmit={createContact}>
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
                        <button className="btn btn-primary" type="submit"> Create Contact  </button>
                    </form>
                </div>
            </div>
    );
};
export default AddContact
