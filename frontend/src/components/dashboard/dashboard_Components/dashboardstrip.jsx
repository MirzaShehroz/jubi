import '../../../assets/css/dashboardstrip.css';
import React from 'react';
import { useRecoilState } from 'recoil';
import icon from '../../../assets/img/stripicon.png'
import UserOverlay from '../../user_Components/useroverlay';
import { showHeaderProfile } from '../../../data/atom';

function DashboardStrip() {
    const [showHeader, setShowHeader] = useRecoilState(showHeaderProfile);
    const showUPanelHandle = () => {
        setShowHeader((obj) => ({
            showHProfile: !showHeader.showHProfile,
            paddingTop: showHeader.showHProfile ? "1.1%" : "0.8%",
            showUserPanel: !showHeader.showUserPanel,
            iconRotate:!showHeader.iconRotate,
        }))
    }
    return (
        <div className='dashboard_strip'>

            {!showHeader.iconRotate ? <img style={{ transform: "rotate(0deg)" }} src={icon} alt="something8" onClick={showUPanelHandle} /> : <img style={{ transform: "rotate(180deg)" }} src={icon} alt="something9" onClick={showUPanelHandle} />}

            {showHeader.showUserPanel ?
                <UserOverlay display='block' animate="animate__animated animate__fadeIn" /> : null
            }
        </div>
    )
}

export default DashboardStrip
