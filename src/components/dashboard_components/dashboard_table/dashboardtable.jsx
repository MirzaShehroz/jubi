import './dashboarddatatables.css';
import React, { useEffect, useState, useCallback } from 'react';
import { Chart } from 'react-google-charts';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import expandButton from '../../../assets/img/expandButton.png';
import user from '../../../assets/img/avatar2.png'
import faStar1 from '../../../assets/img/watchList_icon1.png'
import faStar2 from '../../../assets/img/watchList_icon2.png'
import AddWathListModal from "../../watchlist/addwatchlistmodal";
import RemoveWatchModal from "../../watchlist/removewatchlistmodal";
import { showHeaderProfile, userDataIndividual, usersData_, watchList, watchListComment } from '../../../data/atom';
import { useHistory } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import UserOverlay from '../../user_components/useroverlay/useroverlay';

//jQuery libraries
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';
import ApiServices from '../../../services/apiservices';

function DashboardTable() {
    let date = new Date().getFullYear();
    const [usersData, setUsersData] = useRecoilState(usersData_);
    const [usersDataClone, setUsersDataClone] = useState([]);
    const [/*..*/, setUserWatchList] = useRecoilState(watchList);
    const [/*..*/, setUserIndData] = useRecoilState(userDataIndividual);
    const [showHeader, setShowHeader] = useRecoilState(showHeaderProfile);
    const [btnClr1, setBtnClr1] = useState({ background: '#3E6578', color: '#FFFFFF' })
    const [btnClr2, setBtnClr2] = useState({ background: '#FFFFFF', color: '#3E6578' })
    const [btnClr3, setBtnClr3] = useState({ background: '#FFFFFF', color: '#3E6578' })
    const [btnClr4, setBtnClr4] = useState({ background: '#3E6578', color: '#FFFFFF' })
    const [btnClr5, setBtnClr5] = useState({ background: '#FFFFFF', color: '#3E6578' })
    const [btnClr6, setBtnClr6] = useState({ background: '#FFFFFF', color: '#3E6578' })
    const [btnClr7, setBtnClr7] = useState({ background: '#FFFFFF', color: '#3E6578' })
    const history = useHistory();
    const showUPanelHandle = () => {
        setShowHeader((obj) => ({ showUserPanel: !showHeader.showUserPanel, }))
    }
    const changeBtnClr1 = () => {
        setBtnClr1({ background: '#3E6578', color: '#FFFFFF' });
        setBtnClr2({ background: '#FFFFFF', color: '#3E6578' });
        setBtnClr3({ background: '#FFFFFF', color: '#3E6578' });
    }
    const changeBtnClr2 = () => {
        setBtnClr1({ background: '#FFFFFF', color: '#3E6578' });
        setBtnClr2({ background: '#3E6578', color: '#FFFFFF' });
        setBtnClr3({ background: '#FFFFFF', color: '#3E6578' });
    }
    const changeBtnClr3 = () => {
        setBtnClr1({ background: '#FFFFFF', color: '#3E6578' });
        setBtnClr2({ background: '#FFFFFF', color: '#3E6578' });
        setBtnClr3({ background: '#3E6578', color: '#FFFFFF' });
    }
    const changeBtnClr4 = () => {
        setBtnClr4({ background: '#3E6578', color: '#FFFFFF' });
        setBtnClr5({ background: '#FFFFFF', color: '#3E6578' });
        setBtnClr6({ background: '#FFFFFF', color: '#3E6578' });
        setBtnClr7({ background: '#FFFFFF', color: '#3E6578' });
    }
    const changeBtnClr5 = () => {
        setBtnClr4({ background: '#FFFFFF', color: '#3E6578' });
        setBtnClr5({ background: '#3E6578', color: '#FFFFFF' });
        setBtnClr6({ background: '#FFFFFF', color: '#3E6578' });
        setBtnClr7({ background: '#FFFFFF', color: '#3E6578' });
    }
    const changeBtnClr6 = () => {
        setBtnClr4({ background: '#FFFFFF', color: '#3E6578' });
        setBtnClr5({ background: '#FFFFFF', color: '#3E6578' });
        setBtnClr6({ background: '#3E6578', color: '#FFFFFF' });
        setBtnClr7({ background: '#FFFFFF', color: '#3E6578' });
    }
    const changeBtnClr7 = () => {
        setBtnClr4({ background: '#FFFFFF', color: '#3E6578' });
        setBtnClr5({ background: '#FFFFFF', color: '#3E6578' });
        setBtnClr6({ background: '#FFFFFF', color: '#3E6578' });
        setBtnClr7({ background: '#3E6578', color: '#FFFFFF' });
    }
    const getUsersData = useCallback(async () => {
        const res = await ApiServices.getUsersList();
        if (res.status === 200) {
            setUsersData(res.data.data);
            setUsersDataClone(res.data.data);
        } else if (res.data.code === 403 || res.data.code === 401) {
            history.push('/sign-in');
        }
    }, [setUsersData, history])
    const getUserWatchList = useCallback(async () => {
        const res = await ApiServices.getWatchList();
        if (res.status === 200) {
            setUserWatchList(res.data.data);
        } else if (res.data.code === 403 || res.data.code === 401) {
            history.push('/sign-in');
        }
    }, [setUserWatchList, history])

    const readyPagination = () => {
        $(document).ready(function () {
            setTimeout(function () {
                $('#example').DataTable({
                    language: {
                        search: "_INPUT_",
                        searchPlaceholder: "User name/ Insurance/ Medication"
                    },
                    "columns": [
                        { "searchable": false },
                        null,
                        { "searchable": false },
                        { "searchable": false },
                        null,
                        null
                    ],
                    pageLength: 10,
                    "scrollCollapse": true,
                    "bPaginate": true,
                    "bLengthChange": true,
                    "bFilter": true,
                    "bInfo": false,
                    "bAutoWidth": false,
                    "searching": true,
                    "dom": '<"top"fi>rt<"bottom"lp><"clear">',
                });
            }, 1000);
        });
    }

    const showBadge = (uid) => {
        // let isFound = false;
        // usersRoom.map(item => item.ChatMessages.slice(-1).map(i => {
        //     if (i.from === uid) {
        //         isFound = true;
        //         return isFound
        //     }
        // }))
        return (<Badge color="error" variant="dot">
            <FontAwesomeIcon onClick={() => history.push('/chat')} id={'commentBadge'} icon={faComment} />
        </Badge>)
    }
    const setUserData = (id) => {
        sessionStorage.setItem('uid', id);
        let data = usersData.filter(item => {
            return item.uid === id
        })
        setUserIndData(data);
    }
    useEffect(() => {
        getUsersData();
        getUserWatchList();
    }, [getUsersData, getUserWatchList])
    useEffect(() => {
        readyPagination();
    }, [])

    return (
        <div className='dashboard_child2'>
            <div id={'container'}>
                <div id={'filters'}>
                    <div className={'container-fluid'}>
                        <div className={'row'}>
                            <div style={{ padding: '1%', borderRadius: '20px 0 0 0 ' }} className={'col-md-4 col-sm-12'}>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div className={'col-sm-12'}>
                                            <h5 style={{ color: "#3E6578" }}>Med Types</h5>
                                        </div>
                                        <div className={'col-sm-12'}>
                                            <button className={'filterButtons'} style={btnClr1} onClick={changeBtnClr1}  >All</button>
                                            <button className={'filterButtons'} style={btnClr2} onClick={changeBtnClr2}  >Jubi Watch Only</button>
                                            <button className={'filterButtons'} style={btnClr3} onClick={changeBtnClr3}>Others</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ padding: '0.7%' }} className={'col-md-4 col-sm-12'}>
                                <div className={'container'} style={{ padding: '1% 0' }}>
                                    <div className={'row'}>
                                        <div className={'col-sm-12'}>
                                            <h5 style={{ color: "#3E6578" }}>Medication Adherence Rate</h5>
                                        </div>
                                        <div className={'col-sm-12'} style={{ padding: '0' }} >
                                            <button className={'filterButtons'} style={btnClr4} onClick={changeBtnClr4} >All</button>
                                            <button className={'filterButtons'} style={btnClr5} onClick={changeBtnClr5}>50% and more</button>
                                            <button className={'filterButtons'} style={btnClr6} onClick={changeBtnClr6}>Under 50%</button>
                                            <button className={'filterButtons'} style={btnClr7} onClick={changeBtnClr7}>Under 30%</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ padding: '1%', borderRadius: '0 20px 0 0 ' }} className={'col-md-4 col-sm-12'}>
                                <div className={'container'}>
                                    <div className={'row'}>
                                        <div className={'col-sm-12'}>
                                            <h5 style={{ color: "#3E6578" }}>Search</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id={'datatable'}>
                    <table id="example" className="table table-hover table-bordered" style={{ borderCollapse: 'collapse', background: '#F5F5F5' }}>
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Name</th>
                                <th>Sex</th>
                                <th>Last Visit</th>
                                <th>Primary cvg</th>
                                <th>Adherence rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersDataClone.map((item) => (
                                <tr className={'tableTD'} key={item.uid}>
                                    <td>
                                        <div className={'container'}>
                                            <div className={'row verticleMiddle'}>
                                                <div className={'col-lg-2 col-sm-12'}></div>
                                                <div className={'col-lg-4 col-sm-12 badgeClass'}>
                                                    <Box sx={{ color: 'action.active' }}>
                                                        {showBadge(item.uid)}
                                                    </Box>
                                                </div>
                                                <div className={'col-lg-4 col-sm-12'}>
                                                    <FaUserStar id={item.uid} />
                                                </div>
                                                <div className={'col-lg-2 col-sm-12'}></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={'container'}>
                                            <div className={'row verticleMiddle'}>
                                                <div className={'col-lg-5 col-sm-5 userPic'}>
                                                    <img alt='' src={user} />
                                                </div>
                                                <div className={'col-lg-7 col-sm-7 '}>
                                                    <div className={'col-lg-12 col-sm-12 textTableStyle'}><b>First Name</b> : {item.first_name}</div>
                                                    <div className={'col-lg-12 col-sm-12 textTableStyle'}><b>Last Name</b> : {item.last_name}</div>
                                                    <div id={'year'} className={'col-sm-12'}>{date - parseInt(item.date_of_birth.slice(6))} y.o. ({item.date_of_birth})</div>
                                                </div>

                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ textAlign: 'center' }}>{item.gender.slice(0, 1).toUpperCase() === 'M' ? 'M' : 'F'}</td>
                                    <td style={{ textAlign: 'center' }}>Oct.30.<br />2021</td>
                                    <td>Insurance Name<br />Insurance Name</td>
                                    <td>
                                        <div className={'container'}>
                                            <div className={'row'}>
                                                <div id={'percentage'} className={'col-lg-1 col-sm-1'}><p>5%</p></div>
                                                <div id={'chart'} className={'col-lg-5 col-sm-5'}>
                                                    <Chart

                                                        chartType="AreaChart"
                                                        loader={<div>Loading Chart</div>}
                                                        data={[
                                                            ['', '', ''],
                                                            ['', 140, 300],
                                                            ['', 110, 300],
                                                            ['', 660, 300],
                                                            ['', 103, 300],
                                                        ]}
                                                        options={{
                                                            backgroundColor: { fill: 'transparent' },
                                                            legend: 'none',
                                                            hAxis: {},
                                                            vAxis: { textPosition: 'none', },
                                                            // For the legend to fit, we make the chart area smaller
                                                            chartArea: { width: '100%', height: '60%' },
                                                        }}
                                                    />
                                                </div>
                                                <div id={'medication'} className={'col-lg-5 col-sm-5'}>
                                                    <span>[Jubi] Medication name 1</span><br />
                                                    <span>Medication name 2</span><br />
                                                    <span>Medication name 3</span><br />
                                                    <span>Medication name 4</span><br />
                                                    <u
                                                        onClick={() => {
                                                            setUserData(item.uid);
                                                            showUPanelHandle();
                                                        }}
                                                        style={{ color: 'red', cursor: 'pointer' }}>+1 more</u>
                                                </div>
                                                <div className={'col-lg-1 col-sm-1 rowImg'}>
                                                    <img
                                                        onClick={() => {
                                                            setUserData(item.uid);
                                                            showUPanelHandle();
                                                        }}
                                                        alt=''
                                                        style={{ cursor: 'pointer' }}
                                                        id={'expandButton'}
                                                        src={expandButton} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* USER_OVERLAY */}
                {showHeader.showUserPanel ?
                    <UserOverlay display='block' animate="animate__animated animate__fadeIn" /> : null
                }

            </div>
        </div>
    )
}

const FaUserStar = ({ id }) => {
    const [modalShowAW, setModalShowAW] = useState(false);
    const [modalShowRW, setModalShowRW] = useState(false);
    const [/*userIndData*/, setUserIndData] = useRecoilState(userDataIndividual);
    const usersData = useRecoilValue(usersData_);
    const userWatchList = useRecoilValue(watchList);
    const [/*comment*/, setComment] = useRecoilState(watchListComment);
    const [isFound, setFound] = useState(false);

    const filterUserStar = useCallback(() => {
        let data = usersData.filter(item => {
            return item.uid === id
        })
        data = userWatchList.filter(item => parseInt(item.User.uid) === id);
        if (data.length === 1) {
            setFound(true);
            return;
        } else {
            setFound(false);
            return;
        }
    }, [id, userWatchList, usersData]);

    useEffect(() => {
        if (userWatchList) {
            filterUserStar();
        } else {
            setFound(false);
        }
    }, [filterUserStar, userWatchList])

    const setUserData = () => {
        let data = usersData.filter(item => {
            return item.uid === id
        })
        setUserIndData(data);
        if (userWatchList) {
            data = userWatchList.filter(item => parseInt(item.User.uid) === id);
            let com = data.map(item => item.comment);
            setComment(com);
        } else {
            data = []
        }

        if (data.length === 1) {
            setModalShowAW(false);
            setModalShowRW(true)
            return;
        } else {
            setModalShowAW(true)
            setModalShowRW(false)
            return;
        }
    }
    return (
        <>
            <img src={isFound ? faStar2 : faStar1}
                alt=""
                style={{ cursor: 'pointer' }}
                onClick={() => {
                    setUserData();
                    sessionStorage.setItem('uid', id);
                }}
            />

            {/* WatchList AddModal*/}
            <AddWathListModal
                show={modalShowAW}
                onHide={() => setModalShowAW(false)}
            />
            {/**/}
            {/* WatchList AddModal*/}
            <RemoveWatchModal
                show={modalShowRW}
                onHide={() => setModalShowRW(false)}
            />
        </>
    )
}

export default DashboardTable;
