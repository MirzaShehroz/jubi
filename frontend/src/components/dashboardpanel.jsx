import '../assets/css/dashboard.css';
import React from 'react';
import Header from './header';
import Dashboard from './dashboard';
import DashboardStrip from './dashboardstrip';
import Sidebar from './sidebar';

function DashboardPanel() {
    return (
        <div className='dashboardPanel'>
            <Header />
            <div className='dashboard_parent'>
                <Dashboard/>
                <DashboardStrip/>
                <Sidebar/>
            </div>

        </div>
    )
}

export default DashboardPanel
