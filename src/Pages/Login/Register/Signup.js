import React, { Component } from 'react'
import Navbar from '../../../Components/Navigation/Navbar/Navbar'
import cover from '../../../assests/Login/FormCards.png'
import { NavLink } from 'react-router-dom'

export default class Signup extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="container-fluid loginPage p-0 mt-6">
                    <div className="login-container container">

                        <div className="row">
                            <div className="col-8 d-none d-lg-block">
                                <img src={cover} alt="Cards" />
                            </div>
                            <div className="col-sm-12 col-lg-4">
                                <h1>Sign-up</h1><br />
                                <h4>For neofantasy</h4>

                                <form className='mt-4'>
                                    <input type="email" placeholder='Enter Email ID' className='mb-3' />

                                    <input type="tel" placeholder='Enter Phone Number' className='mb-3' />

                                    <input type="text" placeholder='Entyer Date of Birth (DD/MM/YY)' className='mb-3' />
                                    <NavLink to='/create-password' >
                                        <button type='submit' className='w-100'>Continue</button>
                                    </NavLink>
                                </form>

                            </div>

                        </div>

                    </div>
                </div>
            </>
        )
    }
}
