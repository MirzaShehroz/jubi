import '../../../assets/css/dashboard.css';
import React from 'react';
import { useEffect } from 'react';
import { useRecoilState } from "recoil";
import { useCallback } from 'react';
import axios from 'axios';
import Header from '../../header/header';
import Dashboard from '../dashboard_Components/dashboard';
import DashboardStrip from '../dashboard_Components/dashboardstrip';
import Sidebar from '../../sidebar_Components/sidebar';
import { connectUserShow, docData, showHeaderProfile, userIDedit, userPassEdit } from "../../../data/atom";


function DashboardPanel() {

    const [/*..*/, setDocData] = useRecoilState(docData);
    const [/*..*/, setCmpID] = useRecoilState(userIDedit);
    const [/*..*/, setCmpPass] = useRecoilState(userPassEdit);
    const [/*..*/, setUserOverlay] = useRecoilState(showHeaderProfile);
    const [/*..*/, setCnctUser] = useRecoilState(connectUserShow);

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
        }).catch(err => {
            if (err.response.data.data.code === 403) {
                sessionStorage.clear();
            }
        })
    }, [setDocData])

    const resetUseroverlay = useCallback(() => {
        setUserOverlay((obj) => ({
            showHProfile: true,
            paddingTop: "0.8%",
            showUserPanel: false,
        }))
    }, [setUserOverlay])
    const resetEditId = useCallback(() => {
        setCmpID((obj) => ({
            currentPass: true,
            editEmail: false,
            successEmail: false,
        }))
    }, [setCmpID])
    const resetEditPass = useCallback(() => {
        setCmpPass((obj) => ({
            currentPass: true,
            editEmail: false,
            successEmail: false,
        }))
    }, [setCmpPass])
    const resetCnctUser = useCallback(() => {
        setCnctUser((obj) => ({
            connectMenu: false,
            csMenu: false,
            connectClass: 'c_menu'
        }))
    }, [setCnctUser])

    useEffect(() => {
        getData();
        resetCnctUser();
        resetEditId();
        resetEditPass();
        resetUseroverlay();
    }, [getData, resetEditId, resetEditPass, resetCnctUser, resetUseroverlay])


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
