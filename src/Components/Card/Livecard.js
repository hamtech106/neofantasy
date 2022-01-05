import React, { Component } from 'react'

// My games -> Live Games Card

export default class Livecard extends Component {
    render() {
        return (
            <>
                <div className="col-sm-12 col-md-6 col-lg-4  px-3 px-lg-3   ">
                    <div className="card">
                        <div className="card-content d-flex flex-column justify-content-between align-items-center py-3 px-2 px-md-4">
                            <div className="match-no">
                                <p>Match {this.props.match}</p>
                            </div>
                            <div className="match-title">
                                <p className='text-center'>{this.props.title}</p>
                            </div>
                            <div className="match-flag d-flex justify-content-center align-items-center ">
                                <div className="card-flag">
                                    <img src={this.props.team1flag} alt="" className='img-fluid' />
                                </div>
                                <p className="text-uppercase">{this.props.team1}</p>
                                <span>vs</span>
                                <p className="text-uppercase">{this.props.team2}</p>
                                <div className="card-flag">
                                    <img src={this.props.team2flag} alt="" className='img-fluid' />
                                </div>
                            </div>

                            <div className="match-info d-flex flex-row align-items-end justify-content-between w-100">
                                <div className='d-flex'>
                                    <div className="rank ">
                                        <div className=""><h5>Your Rank</h5></div>
                                        <div className=""><p>#{this.props.rank}</p></div>
                                    </div>
                                    <div className="points ms-3">
                                        <div className=""><h5>Your Points</h5></div>
                                        <div className=""><p>{this.props.points}</p></div>
                                    </div>
                                </div>
                                <div className="live ">
                                    <h3>Live</h3>
                                </div>
                            </div>
                        </div>
                        <button >Join Now</button>
                    </div>
                </div>
            </>
        )
    }
}
