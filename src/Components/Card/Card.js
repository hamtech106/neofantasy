import React, { Component } from 'react'
import { } from './card.css'

// Tab cards  [Fantasy Home | My Games]

export default class Card extends Component {
    render() {
        return (
            <>
                <div className="col-sm-12 col-md-6 col-lg-4 px-3 px-lg-3  ">
                    <div className="card" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                        <div className="card-content d-flex flex-column justify-content-between align-items-center py-3 px-2 px-md-4">
                            <div className="match-no ">
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

                            <div className="match-info d-flex flex-row align-items-center justify-content-between w-100">
                                <div className="entries">
                                    <div className=""><h5>Entries</h5></div>
                                    <div className=""><p>{this.props.entries}</p></div>
                                </div>
                                <div className="starting text-start">
                                    <div className=""><h5>Starting in</h5></div>
                                    <div className=""><p>{this.props.starting}</p></div>
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