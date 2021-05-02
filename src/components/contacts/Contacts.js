import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Contact from './Contact'
import {clearAllContacts, deleteContact, deleteSelected, selectAllContacts} from '../Actions/contact-action'


const Contacts = () => {
    const [selectAll, setSelectAll] = useState(false)
    const dispatch=useDispatch()
    const contacts = useSelector(state => state.contacts)
    const selectedContacts = useSelector((state) => state.selectedContacts)

    useEffect(() => {
        if(selectAll){
            dispatch(selectAllContacts(contacts.map((contact) => contact.id)))
        } else {
            dispatch(clearAllContacts())
        }
    }, [selectAll])

    return (
        <div>
            {
                selectedContacts.length > 0 ? (
                    <button className="btn btn-danger mb-3" onClick={() => dispatch(deleteSelected())}> Delete All </button>
                ) : null
            }
            <table className="table shadow">
                <thead className="bg-danger text-white">
                    <tr>
                        <th> <div className="custom-control custom-checkbox">
                            <input id="selectAll" type="checkbox" value={selectAll} className="custom-control-input" onClick={() => setSelectAll(!selectAll)} />
                            <label htmlFor="selectAll" className="custom-control-label"> </label>

                        </div>
                        </th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((contact) => (
                            <Contact contact={contact} key={contact.id} selectAll={selectAll} />
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default Contacts
