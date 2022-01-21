import '../assets/css/dashboard.css';
import React from 'react';
import Header from './header';
import Dashboard from './dashboard';
import DashboardStrip from './dashboardstrip';
import Sidebar from './sidebar';
import { useEffect } from 'react';
import { authData, docData } from "../data/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useCallback } from 'react';
import axios from 'axios';


function DashboardPanel() {

    const authUserData = useRecoilValue(authData);
    const [/*docDataAtom*/, setDocData] = useRecoilState(docData);

    const getData = useCallback(() => {
        axios.get('/affiliate/v1/doctor/profile', {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('authData')}`
            }
        }).then(res => {
            setDocData((obj) => ({
                dId: res.data.data.did,
                firstName: res.data.data.first_nmae,
                middleName: res.data.data.middle_name,
                lastName: res.data.data.last_name,
                email: res.data.data.email,
                hospital: res.data.data.hospital,
                specialty: res.data.data.speciality,
                title: res.data.data.title,
                phone_number: res.data.data.phone_number,
            }))
        }).catch(err => console.log(err))
    }, [authUserData.token, setDocData])

    useEffect(() => {
        getData();
    }, [getData])


    return (
        <div className='dashboardPanel'>
            <Header />
            <div className='dashboard_parent'>
                <Dashboard />
                <DashboardStrip />
                <Sidebar />
            </div>

        </div>
    )
}

export default DashboardPanel
