import React from 'react'
import './Pool.css'
import BuildTeam from '../BuildTeam/BuildTeam'

const Pool = () => {

    const megapool = [
        {
            prizePool: "1,00,000",
            coins: "70",
            firstPrize: "10,000",
            winRate: "67",
            slots: "340",
        },
        {
            prizePool: "50,000",
            coins: "50",
            firstPrize: "10,000",
            winRate: "33",
            slots: "340",
        },
        {
            prizePool: "10,000",
            coins: "35",
            firstPrize: "1000",
            winRate: "100",
            slots: "340",
        },
    ]

    const beginner = [
        {
            prizePool: "1000",
            coins: "10",
            firstPrize: "50",
            winRate: "99",
            slots: "340",
        },
        {
            prizePool: "1,500",
            coins: "15",
            firstPrize: "75",
            winRate: "99",
            slots: "340",
        },
        {
            prizePool: "200",
            coins: "20",
            firstPrize: "100",
            winRate: "99",
            slots: "340",
        },
    ]

    return (
        <div className='pool p-3'>
            <h4 className='fw-600'>Mega Pool</h4>
            <p className='silent-text text-start'>Pools larger than 10,000 are included</p>

            {megapool.map((mega) => {
                const { prizePool, coins, firstPrize, winRate, slots } = mega;
                return (
                    <div className="container-fluid card py-2 px-3 my-3 ">
                        <div className="d-flex align-items-center justify-content-between">
                            <div >
                                <p className='silent-text text-start'>Prize Pool</p>
                                <h5 className='text-dark'>{prizePool} <img src="./neocointag.png" alt="N"/></h5>
                            </div>
                            <div className="px-2 rounded" style={{ background: "#ffbd29" }}>
                                <p className='fw-600 text-dark'>{coins} <img src="./neocointag.png" alt="N"/></p>
                            </div>
                        </div>
                        <div class="progress my-2">
                            <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: `${winRate}%` }}></div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <div className="me-3 prize">
                                    <p className='silent-text text-start'>1st Prize</p>
                                    <p className='fw-600'><img src="./neocointag.png" alt="N"/> {firstPrize}</p>
                                </div>
                                <div className="win-rate">
                                    <p className='silent-text text-center'>Win Rate</p>
                                    <p className='fw-600 text-center'>{winRate}%</p>
                                </div>
                            </div>
                            <div className="slots">
                                <p className='silent-text text-center'>Slots</p>
                                <p className='fw-600 text-center text-dark'>{slots}<span>/500</span></p>
                            </div>
                        </div>
                    </div>
                )
            })}

            <h4 className='fw-600 mt-4'>Beginners Luck</h4>
            <p className='silent-text text-start'>Pools that you are most likely to be won</p>
            {beginner.map((beginner) => {
                const { prizePool, coins, firstPrize, winRate, slots } = beginner;
                return (
                    <div className="container-fluid card py-2 px-3 my-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div >
                                <p className='silent-text text-start'>Prize Pool</p>
                                <h5 className='text-dark'>{prizePool} <img src="./neocointag.png" alt="N"/></h5>
                            </div>
                            <div className="px-2 rounded" style={{ background: "#ffbd29" }}>
                                <p className='fw-600 text-dark'>{coins} <img src="./neocointag.png" alt="N"/></p>
                            </div>
                        </div>
                        <div class="progress my-2">
                            <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: `${winRate}%` }}></div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <div className="me-3 prize">
                                    <p className='silent-text text-start'>1st Prize</p>
                                    <p className='fw-600'><img src="./neocointag.png" alt="N"/> {firstPrize}</p>
                                </div>
                                <div className="win-rate">
                                    <p className='silent-text text-center'>Win Rate</p>
                                    <p className='fw-600 text-center'>{winRate}%</p>
                                </div>
                            </div>
                            <div className="slots">
                                <p className='silent-text text-center'>Slots</p>
                                <p className='fw-600 text-center text-dark'>{slots}<span>/500</span></p>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Pool
