import React, { Component } from 'react'
import Navbar from '../../../Components/Navigation/Navbar/Navbar'
import cover from '../../../assests/Login/FormCards.png'
import OR from '../../../assests/Login/OR.png'
import Google from '../../../assests/Login/Google icon.png'

export default class LoginPassword extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="container-fluid loginPage p-0 mt-6">
                    <div className="login-container container w-75 ">
                        <div className="row">
                            <div className="col-8 d-none d-lg-block">
                                <img src={cover} alt="Cards" />
                            </div>
                            <div className="col-sm-12 col-lg-4">
                                <h1>Welcome</h1>
                                <h4 className='text-start'>@Username</h4>

                                <form className='mt-4'>
                                    <input type="password" placeholder='Your Password Here' className='mb-3' />

                                    <button type='submit'>Continue</button>

                                    <p className='silent-text mt-2'>
                                        By Proceeding, I agree to <u>T&C</u> & <u>Privacy Policy</u>
                                    </p>

                                    <img src={OR} alt="OR" className=' mt-3 img-fluid' />
                                </form>
                                <button type='submit' className='mt-3 google-btn'>
                                    <img src={Google} alt="google" className='me-2 img-fluid' />
                                    Continue with Google
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </>
        )
    }
}
