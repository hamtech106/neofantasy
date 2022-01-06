import React from 'react'
import './LiveGame1.css'
import PakistanFlag from '../../../../../assests/PakistanFlag.png'
import IndiaFlag from '../../../../../assests/IndiaFlag.png'
import Navbar from '../../../../../Components/Navigation/Navbar/Navbar2'
import { NavLink } from 'react-router-dom'

const LiveGame1 = () => {
    return (
        <>
            <Navbar />
            <div className="container gameOne">
                <div className="row mt-6 d-flex justify-content-center justify-content-lg-start align-items-center  px-3">
                    <div className="card col-12 col-md-4 col-lg-3 me-md-3">
                        <h3>My Teams</h3>
                        <p className='silent-text text-start'>You have selected</p>
                        <h4>India 1</h4>
                        <div className="badge">
                            <p>Change Team</p>
                        </div>
                    </div>
                    <div className="card col-12 col-md-4 col-lg-3 me-md-3 mt-3 mt-md-0">
                        <h3>My Pools</h3>
                        <p className='silent-text text-start'>You have selected</p>
                        <h4>Pool#12 , Pool#16</h4>
                        <div className="badge">
                            <p>Manage Pools</p>
                        </div>
                    </div>
                </div>

                <div className="row row2 mt-4 px-3">
                    <div className="container card">
                        <div className="row align-items-center align-items-lg-start">
                            <div className="col-lg-2">
                                <div className="container-fluid py-3 text-center text-lg-start">
                                    <h4>Pakistan Squad</h4>
                                    <div className="my-3">
                                        <h5>Batsmen</h5>
                                        <p>Babar Azam (C) </p>
                                        <p>Babar Azam</p>
                                        <p>Babar Azam</p>
                                        <p>Babar Azam</p>
                                    </div>
                                    <div className="my-3">
                                        <h5>Wicketkeepers</h5>
                                        <p>Babar Azam</p>
                                        <p>Babar Azam</p>
                                    </div>
                                    <div className="my-3">
                                        <h5>Bowlers</h5>
                                        <p>Babar Azam</p>
                                        <p>Babar Azam</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-8 my-4 my-lg-0 ">
                                <div className="container-fluid d-flex flex-column justify-content-center py-3 text-center bg-transparent filter-none">
                                    <h4 className='text-center'>2021 ICC T20 World Cupmatch #16</h4>
                                    <p className='silent-text-1'>Sun 24 October, 18:00 Local ( 19:30 IST )</p>
                                    <p className='silent-text-2'>Dubai International Stadium, Dubai, UAE
                                    </p>
                                    <NavLink to='/livegame-2'>
                                        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center mt-4">
                                            <div className="">
                                                <img src={PakistanFlag} alt="" className='img-fluid' />
                                                <h4 className='mt-2'>Pakistan</h4>
                                            </div>
                                            <p className='silent-text my-3 my-lg-0 px-lg-4'>VS</p>
                                            <div className="">
                                                <img src={IndiaFlag} alt="" className='img-fluid' />
                                                <h4 className='mt-2'>India</h4>
                                            </div>
                                        </div>
                                    </NavLink>
                                    <div className="count-down d-flex flex-column flex-lg-row align-items-center justify-content-center mt-5">
                                        <div className="days d-flex flex-column mx-3 mt-3 mt-lg-0">
                                            <div className="d-flex">
                                                <div className="block">
                                                    <h4>0</h4>
                                                </div>
                                                <div className="block">
                                                    <h4>1</h4>
                                                </div>
                                            </div>
                                            <p className='silent-text mt-2'>Days</p>
                                        </div>
                                        <div className="hours d-flex flex-column mx-3 mt-3 mt-lg-0">
                                            <div className="d-flex">
                                                <div className="block">
                                                    <h4>2</h4>
                                                </div>
                                                <div className="block">
                                                    <h4>3</h4>
                                                </div>
                                            </div>
                                            <p className='silent-text mt-2'>Hours</p>
                                        </div>
                                        <div className="minutes d-flex flex-column mx-3 mt-3 mt-lg-0">
                                            <div className="d-flex">
                                                <div className="block">
                                                    <h4>4</h4>
                                                </div>
                                                <div className="block">
                                                    <h4>3</h4>
                                                </div>
                                            </div>
                                            <p className='silent-text mt-2'>Minutes</p>
                                        </div>
                                        <div className="seconds d-flex flex-column mx-3 mt-3 mt-lg-0">
                                            <div className="d-flex">
                                                <div className="block">
                                                    <h4>3</h4>
                                                </div>
                                                <div className="block">
                                                    <h4>6</h4>
                                                </div>
                                            </div>
                                            <p className='silent-text mt-2'>Seconds</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2  ">
                                <div className="container-fluid py-3 text-center text-lg-start">
                                    <h4>India Squad</h4>
                                    <div className="my-3">
                                        <h5>Batsmen</h5>
                                        <p>Virat Kohli (C) </p>
                                        <p>Virat Kohli</p>
                                        <p>Virat Kohli</p>
                                        <p>Virat Kohli</p>
                                    </div>
                                    <div className="my-3">
                                        <h5>Wicketkeepers</h5>
                                        <p>Virat Kohli</p>
                                        <p>Virat Kohli</p>
                                    </div>
                                    <div className="my-3">
                                        <h5>Bowlers</h5>
                                        <p>Virat Kohli</p>
                                        <p>Virat Kohli</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LiveGame1
