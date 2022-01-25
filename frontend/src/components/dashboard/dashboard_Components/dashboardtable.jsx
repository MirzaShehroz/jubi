import '../../../assets/css/dashboarddatatables.css';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Chart } from 'react-google-charts';
import axios from 'axios';
import Badge from '@mui/material/Badge';
import { FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faStar } from "@fortawesome/free-regular-svg-icons";
import Box from '@mui/material/Box';
import expandButton from '../../../assets/img/expandButton.png';
import user from '../../../assets/img/avatar2.png'
import AddWathListModal from "../../watchlist/addwatchlistmodal";
import RemoveWatchModal from "../../watchlist/removewatchlistmodal";

//jQuery libraries

import 'jquery/dist/jquery.min.js';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';
import { useCallback } from 'react';
import { showHeaderProfile, userDataIndividual, usersData_ } from '../../../data/atom';
import { useRecoilState } from 'recoil';
import UserOverlay from '../../user_Components/useroverlay';


function DashboardTable() {

    // #3E6578
    const history = useHistory();
    let date = new Date().getFullYear();
    const [usersData, setUsersData] = useRecoilState(usersData_);
    const [usersDataClone, setUsersDataClone] = useState([]);
    const [/*userIndData*/, setUserIndData] = useRecoilState(userDataIndividual);
    const [modalShowAW, setModalShowAW] = React.useState(false);
    const [modalShowRW, setModalShowRW] = React.useState(false);
    const [showHeader, setShowHeader] = useRecoilState(showHeaderProfile);

    const showUPanelHandle = () => {
        setShowHeader((obj) => ({
            showHProfile: !showHeader.showHProfile,
            paddingTop: showHeader.showHProfile ? "1.1%" : "0.8%",
            showUserPanel: !showHeader.showUserPanel,
        }))
    }
    const [btnClr1, setBtnClr1] = useState({
        background: '#3E6578',
        color: '#FFFFFF'
    })
    const [btnClr2, setBtnClr2] = useState({
        background: '#FFFFFF',
        color: '#3E6578'
    })
    const [btnClr3, setBtnClr3] = useState({
        background: '#FFFFFF',
        color: '#3E6578'
    })
    const [btnClr4, setBtnClr4] = useState({
        background: '#3E6578',
        color: '#FFFFFF'
    })
    const [btnClr5, setBtnClr5] = useState({
        background: '#FFFFFF',
        color: '#3E6578'
    })
    const [btnClr6, setBtnClr6] = useState({
        background: '#FFFFFF',
        color: '#3E6578'
    })
    const [btnClr7, setBtnClr7] = useState({
        background: '#FFFFFF',
        color: '#3E6578'
    })

    const changeBtnClr1 = () => {
        setBtnClr1({
            background: '#3E6578',
            color: '#FFFFFF'
        });
        setBtnClr2({
            background: '#FFFFFF',
            color: '#3E6578'
        });
        setBtnClr3({
            background: '#FFFFFF',
            color: '#3E6578'
        });
    }

    const changeBtnClr2 = () => {
        setBtnClr1({
            background: '#FFFFFF',
            color: '#3E6578'
        });
        setBtnClr2({
            background: '#3E6578',
            color: '#FFFFFF'
        });
        setBtnClr3({
            background: '#FFFFFF',
            color: '#3E6578'
        });
    }

    const changeBtnClr3 = () => {
        setBtnClr1({
            background: '#FFFFFF',
            color: '#3E6578'
        });
        setBtnClr2({
            background: '#FFFFFF',
            color: '#3E6578'
        });
        setBtnClr3({
            background: '#3E6578',
            color: '#FFFFFF'
        });
    }
    const changeBtnClr4 = () => {
        setBtnClr4({
            background: '#3E6578',
            color: '#FFFFFF'
        });
        setBtnClr5({
            background: '#FFFFFF',
            color: '#3E6578'
        });
        setBtnClr6({
            background: '#FFFFFF',
            color: '#3E6578'
        });
        setBtnClr7({
            background: '#FFFFFF',
            color: '#3E6578'
        });
    }
    const changeBtnClr5 = () => {
        setBtnClr4({
            background: '#FFFFFF',
            color: '#3E6578'
        });
        setBtnClr5({
            background: '#3E6578',
            color: '#FFFFFF'
        });
        setBtnClr6({
            background: '#FFFFFF',
            color: '#3E6578'
        });
        setBtnClr7({
            background: '#FFFFFF',
            color: '#3E6578'
        });
    }
    const changeBtnClr6 = () => {
        setBtnClr4({
            background: '#FFFFFF',
            color: '#3E6578'
        });
        setBtnClr5({
            background: '#FFFFFF',
            color: '#3E6578'
        });
        setBtnClr6({
            background: '#3E6578',
            color: '#FFFFFF'
        });
        setBtnClr7({
            background: '#FFFFFF',
            color: '#3E6578'
        });
    }
    const changeBtnClr7 = () => {
        setBtnClr4({
            background: '#FFFFFF',
            color: '#3E6578'
        });
        setBtnClr5({
            background: '#FFFFFF',
            color: '#3E6578'
        });
        setBtnClr6({
            background: '#FFFFFF',
            color: '#3E6578'
        });
        setBtnClr7({
            background: '#3E6578',
            color: '#FFFFFF'
        });
    }

    const getUsersData = useCallback(() => {
        axios.get('/affiliate/v1/users', {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('authData')}`
            }
        })
            .then(res => {
                setUsersData(res.data.data);
                setUsersDataClone(res.data.data);
            })
            .catch(error => console.log(error.message));

    }, [setUsersData])

    useEffect(() => {
        getUsersData();
        readyPagination();
    }, [getUsersData])

    const readyPagination = () => {
        $(document).ready(function () {
            setTimeout(function () {
                $('#example').DataTable({
                    pageLength: 10,
                    "scrollCollapse": true,
                    "bPaginate": true,
                    "bLengthChange": true,
                    "bFilter": true,
                    "bInfo": false,
                    "bAutoWidth": false,
                    "searching": false,
                    "dom": '<"top"i>rt<"bottom"flp><"clear">',
                });
            }, 1000);
        });
    }

    const setUserData = (id) => {
        let data = usersData.filter(item => {
            return item.uid === id
        })
        setUserIndData(data);
    }
    const searchUsers = (e) => {
        let data = [];
        if (e.target.value === '') {
            setUsersDataClone(usersData);
        } else {
            data = usersData.filter(item => {
                return item.first_name.toLowerCase().includes(e.target.value.toLowerCase())
            })
            setUsersDataClone(data);
        }
    }

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
                                        <div className={'col-sm-12 d-flex'}>
                                            <FormControl
                                                type="search"
                                                placeholder={'User name/ Insurance/ Medication'}
                                                className="me-2"
                                                aria-label="Search"
                                                onChange={(e) => searchUsers(e)}
                                            />
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
                                                        <Badge color="error" variant="dot">
                                                            <FontAwesomeIcon id={'commentBadge'} icon={faComment} />
                                                        </Badge>
                                                    </Box>
                                                </div>
                                                <div className={'col-lg-4 col-sm-12'}>
                                                    <FontAwesomeIcon
                                                        onClick={() => {
                                                            setUserData(item.uid);
                                                            setModalShowAW(true);
                                                        }}
                                                        id={'starIcon'}
                                                        icon={faStar}
                                                        style={{ cursor: 'pointer' }}
                                                    />
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
                                    <td style={{ textAlign: 'center' }}>{item.gender}</td>
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
                                                    <u onClick={() => history.push('/individual')} style={{ color: 'red', cursor: 'pointer' }}>+1 more</u>
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
                {/**/}
                {/* USER_OVERLAY */}
                {showHeader.showUserPanel ?
                    <UserOverlay display='block' animate="animate__animated animate__fadeIn" /> : null
                }

            </div>
        </div>
    )
}

export default DashboardTable;