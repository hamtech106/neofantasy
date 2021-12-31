import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './SelectFantasy.css'
import kl from '../../../../assests/playerIcon/klrahultag.png'
import ss from '../../../../assests/playerIcon/sanjutag.png'
import rp from '../../../../assests/playerIcon/rishabtag.png'
import ws from '../../../../assests/playerIcon/Wriddhimantag.png'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


const SelectFantasy = () => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const wk = [
        {
            img: kl,
            name: "KL Rahul",
            points: "9.0",
        },
        {
            img: ss,
            name: "Sanju Samson",
            points: "9.0",
        },
        {
            img: rp,
            name: "Rishab Pant",
            points: "9.0",
        },
        {
            img: ws,
            name: "Wriddhiman Shah",
            points: "9.0",
        },
    ]

    const bat = [
        {
            img: kl,
            name: "KL Rahul",
            points: "9.0",
        },
        {
            img: ss,
            name: "Sanju Samson",
            points: "9.0",
        },
        {
            img: rp,
            name: "Rishab Pant",
            points: "9.0",
        },
    ]
    const ar = [
        {
            img: kl,
            name: "KL Rahul",
            points: "9.0",
        },
        {
            img: ss,
            name: "Sanju Samson",
            points: "9.0",
        },
    ]
    const bowl = [
        {
            img: kl,
            name: "KL Rahul",
            points: "9.0",
        },
    ]

    return (
        <>
            <div className="selectFanatay mb-4">
                <div className="d-flex align-items-center justify-content-between w-100 p-3">
                    <div>
                        <h5 className='blue fw-600'>Select Your Fantasy 11</h5>
                        <p className='silent-text text-start fw-600 mt-2'>0 / 11 Players Selected</p>
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        <p className='silent-text  text-center' style={{ fontSize: "10px" }}>Credits</p>
                        <div className="credits-div"><p>143.0</p></div>
                    </div>
                </div>
                <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
                    <AppBar position="static">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            aria-label="full width tabs example"
                            variant='fullWidth'
                            centered
                        >
                            <Tab label="WK (0)" {...a11yProps(0)} />
                            <Tab label="Bat (0)" {...a11yProps(1)} />
                            <Tab label="AR (0)" {...a11yProps(2)} />
                            <Tab label="BOWL (0)" {...a11yProps(3)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <div className="mt-3 container-fluid p-0">
                                {wk.map((curElem) => {
                                    const { name, points, img } = curElem;
                                    return (
                                        <div className="player-card d-flex align-items-center justify-content-between p-3">
                                            <div className="d-flex align-items-center">
                                                <div style={{ width: "40px", height: "40px", backgroundColor: "#fff", borderRadius: "50%", overflow: "hidden" }}>
                                                    <img src={img} alt="" className='img-fluid' />
                                                </div>
                                                <p className='ms-3 me-2 fw-600'>{name}</p>
                                            </div>
                                            <div style={{ backgroundColor: "rgba(15, 40, 101, 1)", borderRadius: "8px" }} className='px-2 py-1'>
                                                <p className='text-light cursor-pointer'>{points} +</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <div className="mt-3 container-fluid p-0">
                                {bat.map((curElem) => {
                                    const { name, points, img } = curElem;
                                    return (
                                        <div className="player-card d-flex align-items-center justify-content-between p-3">
                                            <div className="d-flex align-items-center">
                                                <div style={{ width: "40px", height: "40px", backgroundColor: "#fff", borderRadius: "50%", overflow: "hidden" }}>
                                                    <img src={img} alt="" className='img-fluid' />
                                                </div>
                                                <p className='ms-3 me-2 fw-600'>{name}</p>
                                            </div>
                                            <div style={{ backgroundColor: "rgba(15, 40, 101, 1)", borderRadius: "8px" }} className='px-2 py-1'>
                                                <p className='text-light'>{points} +</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <div className="mt-3 container-fluid p-0">
                                {ar.map((curElem) => {
                                    const { name, points, img } = curElem;
                                    return (
                                        <div className="player-card d-flex align-items-center justify-content-between p-3">
                                            <div className="d-flex align-items-center">
                                                <div style={{ width: "40px", height: "40px", backgroundColor: "#fff", borderRadius: "50%", overflow: "hidden" }}>
                                                    <img src={img} alt="" className='img-fluid' />
                                                </div>
                                                <p className='ms-3 me-2 fw-600'>{name}</p>
                                            </div>
                                            <div style={{ backgroundColor: "rgba(15, 40, 101, 1)", borderRadius: "8px" }} className='px-2 py-1'>
                                                <p className='text-light'>{points} +</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={3} dir={theme.direction}>
                            <div className="mt-3 container-fluid p-0">
                                {bowl.map((curElem) => {
                                    const { name, points, img } = curElem;
                                    return (
                                        <div className="player-card d-flex align-items-center justify-content-between p-3">
                                            <div className="d-flex align-items-center">
                                                <div style={{ width: "40px", height: "40px", backgroundColor: "#fff", borderRadius: "50%", overflow: "hidden" }}>
                                                    <img src={img} alt="" className='img-fluid' />
                                                </div>
                                                <p className='ms-3 me-2 fw-600'>{name}</p>
                                            </div>
                                            <div style={{ backgroundColor: "rgba(15, 40, 101, 1)", borderRadius: "8px" }} className='px-2 py-1'>
                                                <p className='text-light'>{points} +</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </TabPanel>
                    </SwipeableViews>
                </Box>
            </div>
        </>
    )
}

export default SelectFantasy
