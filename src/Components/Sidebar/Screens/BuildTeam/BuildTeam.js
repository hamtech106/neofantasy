import React from 'react'
import './BuildTeam.css'
import player1 from '../../../../assests/Player1.png'
import player2 from '../../../../assests/Player2.png'

const BuildTeam = () => {
    return (
        <>
            <div className="text-center buildTeam">
                <div className="p-3">
                    <h5 className='fw-500'>Build Your Team</h5>
                    <p className='silent-text'>Your will earn points based on performance of
                        your created team and individual players perfromance</p>
                </div>
                <div className="container-fluid card py-2 px-3 mt-2 rounded-0">
                    <div className="d-flex align-items-center justify-content-between">
                        <div >
                            <p className='silent-text text-start'>Prize Pool</p>
                            <h5 className='text-dark'>1,00,000 <img src="./neocointag.png" alt="N"/></h5>
                        </div>
                        <div className="px-2 rounded" style={{ background: "#ffbd29" }}>
                            <p className='fw-600 text-dark'>70 <img src="./neocointag.png" alt="N"/></p>
                        </div>
                    </div>
                    <div class="progress my-2">
                        <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "67%" }}></div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <div className="me-3 prize">
                                <p className='silent-text text-start'>1st Prize</p>
                                <p className='fw-600'><img src="./neocointag.png" alt="N"/> 10,000</p>
                            </div>
                            <div className="win-rate">
                                <p className='silent-text text-center'>Win Rate</p>
                                <p className='fw-600 text-center'>67%</p>
                            </div>
                        </div>
                        <div className="slots">
                            <p className='silent-text text-center'>Slots</p>
                            <p className='fw-600 text-center text-dark'>340<span>/500</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between bg-white pt-2">
                <img src={player1} alt="" />
                <img src={player2} alt="" />
            </div>
            <div className="p-3">
                <div className="card p-3 " style={{ lineHeight: "30px" }}>
                    <p className='fw-600 text-center blue'>Cricket Points Cheat Sheet</p>
                    <div className="blue d-flex align-items-cenetr justify-content-between text-center">
                        <p>1 Run = 1 Point</p>
                        <p className='ms-4'>|</p>
                        <p>1 Six = 25 Points</p>
                    </div>
                    <div className="blue d-flex align-items-cenetr justify-content-between text-center">
                        <p>100 += 200 Points</p>
                        <p>|</p>
                        <p>50 += 100 Points</p>
                    </div>
                    <p className='blue text-center mt-2'><u>Learn Full Points System</u></p>
                </div>
            </div>
        </>
    )
}

export default BuildTeam
