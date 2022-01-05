import React, { Component } from 'react'
import Logo from '../../../assests/Logo.png'
// import { NavLink } from 'react-router-dom'
// import { Construction } from '@mui/icons-material'

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
                        <img src={Logo} alt="Logo" className='img-fluid' />
                        <h3>neofantasy</h3>

                        <ul className="list-unstyled d-flex align-items-center justify-content-center">
                            <li className='active' id="1" onClick={() => activeTrue(1)}>
                                <a>Fantasy Home</a>
                            </li>
                            <li id="2" onClick={() => activeTrue(2)}>
                                <a>My Games</a>
                            </li>
                            <li id="3" onClick={() => activeTrue(3)}>
                                <a>Reward</a>
                            </li>
                            <li id="4" onClick={() => activeTrue(4)}>
                                <a>Wallet</a>
                            </li>
                        </ul>

                    </div>
                    <div className="nav-right">
                        <a href="#"> <div className="nav-btn"> 10,000</div> </a>
                        <a href="#"> <div className="nav-btn"> @bhojaksmith </div> </a>
                    </div>
                </nav>
            </>
        )
    }
}
