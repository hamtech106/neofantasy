import React, { Component } from 'react'
import { } from './Navbar.css'
import Logo from '../../../assests/Logo.png'
import { NavLink } from 'react-router-dom'

// Navbar for the Login and Register Page 

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className='container-fluid d-none d-lg-flex align-items-center justify-content-between fixed-top'>
                    <div className="nav-left ">
                        <img src={Logo} alt="Logo" className='img-fluid' />
                        <h3>neofantasy</h3>
                    </div>
                    <div className="nav-right">
                        <NavLink to='/signup'> <div className="nav-btn"> Sign Up </div> </NavLink>
                        <NavLink to='#'> <div className="nav-btn"> About Us </div> </NavLink>
                        <NavLink to='#'> <div className="nav-btn"> Why NeoFantasy? </div> </NavLink>
                    </div>
                </nav>
            </>
        )
    }
}
