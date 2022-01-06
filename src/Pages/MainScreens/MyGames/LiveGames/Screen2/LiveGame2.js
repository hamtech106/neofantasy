import React from 'react'
import './LiveGame2.css'
import PakistanFlag from '../../../../../assests/PakistanFlag.png'
import IndiaFlag from '../../../../../assests/IndiaFlag.png'
import Navbar from '../../../../../Components/Navigation/Navbar/Navbar2'
import Leaderboard from '../../../../../Components/MyGames/Leaderboard'
import { NavLink } from 'react-router-dom'

const LiveGame2 = () => {
    const runs = [0, 2, 1, 2, 5, 6, "W", 4, "WD"]
    return (
        <>
            <Navbar></Navbar>
            <div className="gameTwo container-fluid mt-6 pb-3">
                <div className="row">
                    <div className="col-lg-8 pe-lg-0">
                        <div className="container-fluid">
                            <div className="row row1">
                                <div className="col-12 card w-100 flex-md-row align-items-center align-items-md-start justify-content-evenly p-3">
                                    <NavLink to='/livegame-1'>
                                        <div className=" d-flex flex-column">
                                            <div className="d-flex flex-column flex-lg-row">
                                                <div className="">
                                                    <img src={PakistanFlag} alt="" className='img-fluid' />
                                                    <h4 className='text-center mt-3'>Pakistan</h4>
                                                    <p className='silent-text'>Won the toss & Decided to bat First</p>
                                                </div>
                                                <div className="scores text-center text-lg-start">
                                                    <h1 className='fw-bold'>139/6</h1>
                                                    <h3 className='fw-bold'>19.4/20</h3>
                                                    <h5 className='fw-bold'>RR: 7.06</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                    <div className="mt-3 mt-md-0">
                                        <img src={IndiaFlag} alt="" className='img-fluid' />
                                        <h4 className='text-center mt-3'>India</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-md-5 pe-md-4">
                                    <div className="row">
                                        <div className="col-12 card mb-3 p-3 ">
                                            <div className="d-flex align-items-center justify-content-around w-100">
                                                <p className='left'>17%</p>
                                                <p className='center'>Win Probability</p>
                                                <p className='right'>83%</p>
                                            </div>
                                            <div class="progress mt-3 ">
                                                <div class="progress-bar w-25" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="col-12 card p-0 mb-3 wickets">
                                            <div className="d-flex py-2 px-3">
                                                <p className='fw-600 me-3'>Ball by Ball</p>
                                                <p className='fw-600 grey-color-text'>Fall of Wickets</p>
                                            </div>
                                            <div className="container-fluid px-3 pt-0 pb-3 d-flex flex-wrap align-items-center">
                                                {runs.map((run) => {
                                                    switch (run) {
                                                        case 'W': return (
                                                            <div className="runs out" >
                                                                <h5>{run}</h5>
                                                            </div>
                                                        );
                                                            break;

                                                        case 4: return (
                                                            <div className="runs four" >
                                                                <h5>{run}</h5>
                                                            </div>
                                                        );
                                                            break;

                                                        case 6: return (
                                                            <div className="runs six" >
                                                                <h5>{run}</h5>
                                                            </div>
                                                        );
                                                            break;

                                                        case "WD": return (
                                                            <div className="runs wide" >
                                                                <h5>{run}</h5>
                                                            </div>
                                                        );
                                                            break;

                                                        default: return (
                                                            <div className="runs">
                                                                <h5>{run}</h5>
                                                            </div>
                                                        )
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 card commentary p-0">
                                    <div className="d-flex py-2 px-3">
                                        <p className='fw-600 me-3'>Commentary</p>
                                        <p className='fw-600 grey-color-text'>Scorecard</p>
                                    </div>
                                    <div className="container-fluid h-100 p-3 ">
                                        <p>SRI LANKA Won the toss & Decided to bat First</p>
                                        <p>SRI LANKA Won the toss & Decided to bat First</p>
                                        <p>SRI LANKA Won the toss & Decided to bat First</p>
                                        <p>SRI LANKA Won the toss & Decided to bat First</p>
                                        <p>SRI LANKA Won the toss & Decided to bat First</p>
                                        <p>SRI LANKA Won the toss & Decided to bat First</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 ps-lg-0 px-4 pe-lg-4 h-100">
                        <div className="container-fluid card px-0 pb-3 h-100">
                            <Leaderboard></Leaderboard>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LiveGame2
