import React from 'react'
import Navbar from '../../../Components/Navigation/Navbar/Navbar'
import './LoginPage.css'
import cover from '../../../assests/Login/FormCards.png'
import OR from '../../../assests/Login/OR.png'
import Google from '../../../assests/Login/Google icon.png'


const LoginPage = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid loginPage mt-6 p-0">
                <div className="login-container container w-75 mx-auto ">
                    <div className="row">
                        <div className="col-8 d-none d-lg-block">
                            <img src={cover} alt="Cards" />
                        </div>
                        <div className="col-sm-12 col-lg-4">
                            <h1>Login <br /> To Continue</h1>
                            <form className='mt-4'>
                                <input type="text" placeholder='Your Email or Username Here' className='mb-3' />
                                <button>Continue</button>
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

export default LoginPage
