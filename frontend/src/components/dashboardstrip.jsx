import '../assets/css/dashboardstrip.css';
import React from 'react';
import icon from '../assets/img/stripicon.png'
import UserOverlay from './useroverlay';
import { useState } from 'react';
import { showHeaderProfile } from '../data/atom';
import { useRecoilState } from 'recoil';

function DashboardStrip() {
    const [showUserPanel, setUPanel] = useState(false);
    const [iconRotate, setIconRotate] = useState(false);
    const [showHeader, setShowHeader] = useRecoilState(showHeaderProfile);
    const showUPanelHandle = () => {
        setShowHeader((obj) => ({
            showHProfile: !showHeader.showHProfile,
            paddingTop: showHeader.showHProfile ? "1.1%" : "0.8%",
        }))
        setUPanel(!showUserPanel);
        setIconRotate(!iconRotate);
    }
    return (
        <div className='dashboard_strip'>

            {!iconRotate ? <img style={{ transform: "rotate(0deg)" }} src={icon} alt="" onClick={showUPanelHandle} /> : <img style={{ transform: "rotate(180deg)" }} src={icon} alt="" onClick={showUPanelHandle} />}

            {showUserPanel ?
                <UserOverlay display='block' animate="animate__animated animate__fadeIn" /> : null
            }
        </div>
    )
}

export default DashboardStrip
