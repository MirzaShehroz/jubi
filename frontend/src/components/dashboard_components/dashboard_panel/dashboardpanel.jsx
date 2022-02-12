import '../dashboard/dashboard.css';
import React, { useEffect, useCallback } from 'react';
import { useRecoilState } from "recoil";
import _ from 'underscore';
import { useHistory } from 'react-router-dom';
import Header from '../../header/header';
import Dashboard from '../dashboard/dashboard';
import DashboardStrip from '../dashboard_strip/dashboardstrip';
import Sidebar from '../../sidebar_components/sidebar/sidebar';
import { connectUserShow, docData, showHeaderProfile, userChatRooms, userIDedit, userPassEdit } from "../../../data/atom";
import ApiServices from '../../../services/apiservices';

function DashboardPanel() {

    const [/*..*/, setDocData] = useRecoilState(docData);
    const [/*..*/, setCmpID] = useRecoilState(userIDedit);
    const [/*..*/, setCmpPass] = useRecoilState(userPassEdit);
    const [/*..*/, setUserOverlay] = useRecoilState(showHeaderProfile);
    const [/*..*/, setCnctUser] = useRecoilState(connectUserShow);
    const [/*..*/, setUserRooms] = useRecoilState(userChatRooms);
    const history = useHistory();

    const setPreflight = async () => {
        await ApiServices.setPreflight();
    }
    const getDocProfile = useCallback(async () => {
        const res = await ApiServices.getDocProfile();
        if (res.status === 200) {
            setDocData((obj) => ({
                dId: res.data.data.did,
                firstName: res.data.data.first_name,
                middleName: res.data.data.middle_name,
                lastName: res.data.data.last_name,
                email: res.data.data.email,
                hospital: res.data.data.hospital,
                specialty: res.data.data.speciality,
                title: res.data.data.title,
                phone_number: res.data.data.phone_number,
            }));
        } else if (res.data.code === 403) {
            history.push('/sign-in');
        }
    }, [setDocData, history])
    const getChatRooms = useCallback(async () => {
        const res = await ApiServices.getDoctorChatRooms();
        if (res.status === 200) {
            if (res.data.data) return setUserRooms(_.sortBy(res.data.data, 'Rid'))
        } else if (res.data.code === 403) {
            history.push('/sign-in');
        }
    }, [setUserRooms, history])
    const getData = useCallback(() => {
        setPreflight();
        getDocProfile();
        getChatRooms();
    }, [getDocProfile, getChatRooms])

    const resetUseroverlay = useCallback(() => {
        setUserOverlay((obj) => ({ showHProfile: true, paddingTop: "0.8%", showUserPanel: false, }))
    }, [setUserOverlay])
    const resetEditId = useCallback(() => {
        setCmpID((obj) => ({ currentPass: true, editEmail: false, successEmail: false, }))
    }, [setCmpID])
    const resetEditPass = useCallback(() => {
        setCmpPass((obj) => ({ currentPass: true, editEmail: false, successEmail: false, }))
    }, [setCmpPass])
    const resetCnctUser = useCallback(() => {
        setCnctUser((obj) => ({ connectMenu: false, csMenu: false, connectClass: 'c_menu' }))
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
