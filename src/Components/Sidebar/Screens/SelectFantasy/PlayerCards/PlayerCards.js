import React, { Component } from 'react'
import './PlayerCards.css'

export default class PlayerCards extends Component {
    render() {

        let flag = true;
        const selectItem = (id) => {
            const card = document.getElementById(`card-${id}`);
            card.classList.toggle('selected')
            flag = !flag
            const add = document.getElementById(`add-${id}`);
            if (flag === false) {
                add.innerHTML = `${this.props.points} -`
            } else {

                add.innerHTML = `${this.props.points} +`
            }

        }

        return (
            <>
                <div className="player-card d-flex align-items-center justify-content-between p-3"
                    id={`card-${this.props.index}`} >
                    <div className="d-flex align-items-center">
                        <div style={{ width: "40px", height: "40px", backgroundColor: "#fff", borderRadius: "50%", overflow: "hidden" }}>
                            <img src={this.props.img} alt="" className='img-fluid' />
                        </div>
                        <p className='ms-3 me-2 fw-600'>{this.props.name}</p>
                    </div>
                    <div style={{ backgroundColor: "rgba(15, 40, 101, 1)", borderRadius: "8px", cursor: "pointer" }} className='px-2 py-1' onClick={() => selectItem(this.props.index)}>
                        <p className='text-light plus cursor-pointer' id={`add-${this.props.index}`}>{this.props.points} + </p>
                    </div>
                </div>
            </>
        )
    }
}
