import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand"> Contacts Book </Link>
                <div>
                    <Link to="/add-contact" className="btn btn-light ml-auto"> Add Contact </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
