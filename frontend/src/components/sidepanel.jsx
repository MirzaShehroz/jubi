import '../assets/css/sidepanel.css'
import React from 'react'
import DashboardStrip from './dashboardstrip';

function SidePanel({ display }) {
    return (
        <div id='sidePanel' style={{ display: display }} >
            <div className='sidePanel_child1'></div>
            <div className='sidePanel_child2'></div>
            <div className='sidePanel_child3'></div>
            <div ></div>
        </div>
    )
}

export default SidePanel
