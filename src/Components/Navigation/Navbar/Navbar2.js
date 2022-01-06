import React, { Component } from 'react'
import Logo from '../../../assests/Logo.png'
import { NavLink } from 'react-router-dom'

// Navbar for the Other Pages 

export default class Navbar2 extends Component {
    render() {

        const activeTrue = (id) => {
            for (let i = 1; i <= 4; i++) {
                document.getElementById(i).classList.remove("active")
            }
            document.getElementById(id).classList.add("active")
        }

        return (
            <>
                <nav className='container-fluid d-none d-lg-flex align-items-center justify-content-between fixed-top'>
                    <div className="nav-left ">
                        <NavLink to="/home" className='p-0 d-flex'>
                            <img src={Logo} alt="Logo" className='img-fluid' />
                            <h3>neofantasy</h3>
                        </NavLink>

                        <ul className="list-unstyled d-flex align-items-center justify-content-center">
                            <li className='active' id="1" onClick={() => activeTrue(1)}>
                                <NavLink to='/home'>Fantasy Home</NavLink>
                            </li>
                            <li id="2" onClick={() => activeTrue(2)}>
                                <NavLink to='/mygames'>My Games</NavLink>
                            </li>
                            <li id="3" onClick={() => activeTrue(3)}>
                                <NavLink to='/'>Reward</NavLink>
                            </li>
                            <li id="4" onClick={() => activeTrue(4)}>
                                <NavLink to='/password'>Wallet</NavLink>
                            </li>
                        </ul>

                    </div>
                    <div className="nav-right">
                        <NavLink to="/login"> <div className="nav-btn"> 10,000</div> </NavLink>
                        <NavLink to="/signup"> <div className="nav-btn"> @bhojaksmith </div> </NavLink>
                    </div>
                </nav>
            </>
        )
    }
}
