import React from 'react'
import DashboardTable from './dashboardtable';
import DashboardGraph from './dashboardgraph';

function Dashboard() {
    const auth = true;
    return (
        <div className='dashboard' style={{ background: !auth ? "#b5b5b5" : 'transparent' }}>
            {auth ?
                <>
                    <DashboardGraph />
                    <DashboardTable />
                </>
                : null}
        </div >
    )
}

export default Dashboard;
