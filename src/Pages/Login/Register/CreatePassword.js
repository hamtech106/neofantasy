import React, { Component } from 'react'
import Navbar from '../../../Components/Navigation/Navbar/Navbar'
import cover from '../../../assests/Login/FormCards.png'

export default class CreatePassword extends Component {
    render() {
        return (
            <>
                <div className="container-fluid loginPage mt-6 p-0">
                    <Navbar />
                    <div className="login-container container">

                        <div className="row">
                            <div className="col-8 d-none d-lg-block">
                                <img src={cover} alt="Cards" />
                            </div>
                            <div className="col-sm-12 col-lg-4">
                                <h3>Create a secure password</h3>

                                <form className='mt-4'>
                                    <input type="password" placeholder='Enter Password' className='mb-3' />

                                    <input type="password" placeholder='Re-enter Password' className='mb-3' />

                                    <p className='silent-text mb-2 px-4'>
                                        Passwords Must Contain a special
                                        character, a number and a Capital Letter</p>

                                    <button type='submit'>Sign up</button>

                                    <p className='silent-text mt-2'>
                                        By Proceeding, I agree to <u>T&C</u> & <u>Privacy Policy</u>
                                    </p>

                                    {/* <img src="./assests/Login/OR.png" alt="OR" className=' mt-3 img-fluid' /> */}
                                </form>
                                {/* <button type='submit' className='mt-3 google-btn'>
                                    <img src="./assests/Login/Google icon.png" alt="google" className='me-2 img-fluid' />
                                    Continue with Google
                                </button> */}
                            </div>

                        </div>

                    </div>
                </div>
            </>
        )
    }
}
