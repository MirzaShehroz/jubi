import '../../individualuserpanel.css';
import React, { useCallback, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import Alergies from "../../../../alergies/alergies";
import closeIcon from '../../../../../assets/img/cancelicon2.png'
import IndividualPanel2 from "../individual_panel2/individualpanel2";
import IndividualUserPanel from "../../individualuserpanel";
import { useRecoilState, useRecoilValue } from 'recoil';
import {  userAllergies, userConditions, userDataIndividual, usersData_, watchList } from '../../../../../data/atom';
import ApiServices from '../../../../../services/apiservices';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';

function IndividualPanel() {
    const componentRef = useRef();
    const [/*..*/, setUserWatchList] = useRecoilState(watchList);
    const [/*..*/, setUsersData] = useRecoilState(usersData_);
    const [/*..*/, setUserData] = useRecoilState(userDataIndividual);
    const userIndData = useRecoilValue(userDataIndividual);
    const [/*..*/, setAllergies] = useRecoilState(userAllergies);
    const [/*..*/, setConditions] = useRecoilState(userConditions);
    const history = useHistory();
    const closeHandle = () => {
        history.push('/');
    }
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })
    const findUserIndData = useCallback(() => {
        userIndData.map(item => {
            if (item.allergies.length > 0) {
                setAllergies(item.allergies);
            } else {
                setAllergies([]);
            }
            if (item.conditions.length > 0) {
                setConditions(item.conditions);
            } else {
                setConditions([]);
            }
        })
    }, [userIndData, setAllergies, setConditions])

    const getUserWatchList = useCallback(async () => {
        const res = await ApiServices.getWatchList();
        if (res.status === 200) {
            setUserWatchList(res.data.data);
        } else if (res.data.code === 403 || res.data.code === 401) {
            history.push('/sign-in');
        }
    }, [setUserWatchList, history])
    const getUsersData = useCallback(async () => {
        const res = await ApiServices.getUsersList();
        if (res.status === 200) {
            setUsersData(res.data.data);
            let data = res.data.data.filter(item => item.uid === parseInt(sessionStorage.getItem('uid')));
            setUserData(data);
        } else if (res.data.code === 403 || res.data.code === 401) {
            history.push('/sign-in');
        }
    }, [setUsersData, setUserData, history])

    useEffect(() => {
        getUsersData();
        getUserWatchList();
    }, [getUsersData, getUserWatchList])
    useEffect(() => {
        findUserIndData();
    }, [findUserIndData])

    return (
        <div className='individualPanel'>
            <div className='individualPanel_close'>
                <img onClick={closeHandle} src={closeIcon} alt="" />
            </div>
            <div className='individualPanel_main' id="exportToPdf">
                <div className='individualPanel_child1'>
                    <IndividualUserPanel onHandlePrint={handlePrint} />
                </div>
                <div className='individualPanel_child2' ref={componentRef}>
                    {useLocation().pathname === '/individual' ? <IndividualPanel2 /> : null}
                    {useLocation().pathname === '/allergies-condition' ? <Alergies /> : null}
                </div>
            </div>
        </div>
    )
}

export default IndividualPanel
