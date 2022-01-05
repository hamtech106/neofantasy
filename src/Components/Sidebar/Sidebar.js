import './Sidebar.css'
import Arrow from '../../assests/Icons/left arrow.png'
import IndiaFlag from '../../assests/Flags/India.png'
import SrilankaFlag from '../../assests/Flags/Srilanka.png'
import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import Pool from './Screens/Pools/Pool';
import BuildTeam from './Screens/BuildTeam/BuildTeam';
import Fantasy from './Screens/SelectFantasy/SelectFantasy';
import Confirm from './Screens/ConfirmTeam/Confirm';
import Success from '../../assests/Success.png'

const steps = [
    {
        description: <Pool />
    },
    {
        description: <BuildTeam />
    },
    {
        description: <Fantasy />
    },
    {
        description: <Confirm />,
    },
];


const Sidebar = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <>
            <div class="offcanvas offcanvas-end sidebar d-flex justify-content-center" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header d-flex align-items-center justify-content-between">
                    <div className='d-flex align-items-center'>
                        <img src={Arrow} onClick={handleBack} hidden={activeStep === 0} style={{ cursor: "pointer" }} alt='Back' />
                        <img src={Arrow} alt="" type="button" data-bs-dismiss="offcanvas" aria-label="Close" hidden={activeStep !== 0} />
                        <p className='fw-600 ms-3'>India Tour of Srilanka</p>
                    </div>
                    <div className="time">
                        <p>3<span>h</span>23<span>m</span>47<span>s</span></p>
                    </div>
                </div>
                <div className="teams d-flex align-items-center justify-content-around">
                    <div>
                        <img src={SrilankaFlag} alt="" className='img-fluid' />
                    </div>
                    <div className='title'>
                        <p>SL <span>vs</span> IND</p>
                    </div>
                    <div>
                        <img src={IndiaFlag} alt="" className='img-fluid' />
                    </div>
                </div>
                <div class="offcanvas-body p-0 pb-5">
                    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
                        <Box sx={{ height: "100%", width: '100%' }}>
                            {steps[activeStep].description}
                        </Box>
                    </Box>
                </div>
                <div className="ps-3 pe-4">
                    <button onClick={handleNext} hidden={activeStep === maxSteps - 1} className='next'>Next</button>
                    <button data-bs-toggle="modal" href="#exampleModalToggle" hidden={activeStep !== maxSteps - 1} className='next' >Save Team</button>
                </div>
            </div>

            {/* Modal */}
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content modal1">
                        <div class="modal-body">
                            <div class="modal-body text-center">
                                <h4 className='fw-600 mb-3'>Save Team Name</h4>
                                <p>Now that you have created your fantasy 11
                                    Name your team for better access next time</p>
                                <input type="text" placeholder='Enter Team Name' className='w-100' />
                                <div className="d-flex flex-column">
                                    <button type="button" class="mt-4 mb-2" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal" onClick={() => {
                                        setActiveStep(0);
                                    }}>Save Team Name</button>
                                    <button type="button" className="bg-light text-dark" data-bs-dismiss="modal" >No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content modal2">
                        <div class="modal-body">
                            <div class="modal-body text-center" >
                                <img src={Success} alt="" />
                                <h4 className='fw-600 mt-2' > @username’s <br /> Team 1
                                    Was Created Successfully</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
