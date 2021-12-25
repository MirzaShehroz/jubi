import '../assets/css/dashboard.css';
import React from 'react';
import Header from './header';
import Dashboard from './dashboard';
import DashboardStrip from './dashboardstrip';
import Sidebar from './sidebar';
import {useEffect} from 'react';
// import {authData} from "../data/atom";
// import {useRecoilState} from "recoil";


function DashboardPanel() {

    // const [authUserData,setAD] = useRecoilState(authData);
    useEffect(()=>{
        console.log(sessionStorage.getItem('authData'));
    },[])


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
