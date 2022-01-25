import '../../../assets/css/dashboardstrip.css';
import React from 'react';
import { useRecoilState } from 'recoil';
import icon from '../../../assets/img/stripicon.png';
import { sidePanelFunc } from '../../../data/atom';
import SidePanel from '../../sidebar_Components/sidepanel';

function DashboardStrip() {
    const [showSidePanel, setSP] = useRecoilState(sidePanelFunc);

    const showSidePanelHandle = () => {
        setSP((obj) => ({
            ...obj,
            showSP: 'grid',
        }))
    }
    return (
        <>
            <div className='dashboard_strip'>
                <img style={{ transform: "rotate(0deg)" }} onClick={showSidePanelHandle} src={icon} alt="something8" />
            </div>
            <SidePanel display={showSidePanel.showSP} />
        </>
    )
}

export default DashboardStrip
