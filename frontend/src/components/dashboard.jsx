import React from 'react'
import DashboardTable from './dashboardtable';
import DashboardGraph from './dashboardgraph';


function Dashboard() {
    
    return (
        <div className='dashboard'>
            <DashboardGraph />
            <DashboardTable />
        </div >
    )
}

export default Dashboard
