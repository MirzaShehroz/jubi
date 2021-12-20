import '../assets/css/dashboardstrip.css';
import React from 'react';
import icon from '../assets/img/stripicon.png'

function DashboardStrip() {
    return (
        <div className='dashboard_strip'>
            <img src={icon} alt="" />
        </div>
    )
}

export default DashboardStrip
