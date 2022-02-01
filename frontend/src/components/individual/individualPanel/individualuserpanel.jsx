import user from "../../../assets/img/user.jpg";
import React, { useEffect, useState, useCallback } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import cancelButton from "../../../assets/img/closeButton.png";
import chatIcon from "../../../assets/img/chaticon.png";
import watchListIcon from "../../../assets/img/bookmark.png";
import exportIcon from "../../../assets/img/export.png";
import { usersData_, watchList, userDataIndividual } from '../../../data/atom';
import { useRecoilValue, useRecoilState } from 'recoil';
import axios from "axios";
import { Notifications } from "../../../helpers/helpers";

function IndividualUserPanel() {
    const history = useHistory();
    const usersData = useRecoilValue(usersData_);
    const [usersDataClone, setUsersDataClone] = useState([]);
    let date = new Date().getFullYear();

    const showChat = () => {
        history.push('/chat')
    }
    const showIndividual = () => {
        history.push('/individual')
    }
    const showAllergies = () => {
        history.push('/allergies-condition')
    }

    useEffect(() => {
        let data = usersData.filter(item => item.uid === parseInt(sessionStorage.getItem('uid')));
        setUsersDataClone(data);
    }, [usersData])

    return (
        <>
            {
                usersDataClone.map(item => {
                    return (
                        <>
                            <p className={'text-center'}><img onClick={showIndividual} alt="user" id={'userImg'} src={user} /></p>
                            <br />
                            <h5 className={'text-center'} style={{ fontSize: '16px' }}>{item.first_name} {item.last_name}</h5>
                            <p className={'text-center'} style={{ fontSize: '13px' }}>{item.gender.slice(0, 1).toUpperCase() === 'M' ? 'Male' : 'Female'}</p>
                            <p className={'text-center'} style={{ fontSize: '13px' }}>{date - parseInt(item.date_of_birth.slice(6))} y.o. <span>({item.date_of_birth})</span></p>
                            <p className={'text-center'} style={{ fontSize: '13px' }}>Wt:{item.weight} /  Ht:{item.height}</p>
                        </>
                    )
                })
            }
            <br />
            <table className="userPanel_table">
                <tbody>
                    {
                        usersDataClone.map(item => (
                            <>
                                <tr>
                                    <td className={'emailHead'}>Email</td>
                                    <td>{item.email}</td>
                                </tr>
                                <tr>
                                    <td className={'phoneHead'}>Phone</td>
                                    <td>+9256821566</td>
                                </tr>
                            </>
                        ))
                    }
                </tbody>
            </table>
            <br />
            <p onClick={showAllergies} id={'alergies'}><u>Allergies (11) & Conditions (3)</u></p>
            <br />
            <div id={'memo'}>
                <table>
                    <tbody>
                        <tr>
                            <td className={'memoHead'}>Memo</td>
                            <td className={'memoHeadIcon'}><FontAwesomeIcon icon={faPen} /></td>
                        </tr>
                    </tbody>
                </table>
                <p className={'memoMsg'}>
                    She has heart attack family history.
                </p>
                <table>
                    <tbody>
                        <tr>
                            <td className={'memoHead'}>Watchlist Comments</td>
                            <td className={'memoHeadIcon'} style={{ color: '#D7575F' }}>Done</td>
                        </tr>
                    </tbody>
                </table>
                <div className={'container'}>
                    <div className={'row memoWatchlist'}>
                        <div className={'col-lg-10 col-sm-10'}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis error, incidunt nemo perferendis perspiciatis</p>
                        </div>
                        <div className={'col-lg-2 col-sm-2'}>
                            <img src={cancelButton} alt={'cancel'} style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="userPanelInd_btn">
                {useLocation().pathname === '/chat' ?
                    <>
                        <button onClick={showIndividual} >View detailed page</button>
                        <ButtonW id={parseInt(sessionStorage.getItem('uid'))} />
                    </>
                    :
                    <>
                        <button onClick={showChat}><img src={chatIcon} alt={'chatIcon'} />Send Message</button>
                        <button><img src={exportIcon} alt={'exportIcon'} />Export to PDF</button>
                        <ButtonW id={parseInt(sessionStorage.getItem('uid'))} />
                    </>}
            </div>
        </>
    )
}
const ButtonW = ({ id }) => {
    const [/*userIndData*/, setUserIndData] = useRecoilState(userDataIndividual);
    const usersData = useRecoilValue(usersData_);
    const [userWatchList, setUserWatchList] = useRecoilState(watchList);
    const [isFound, setFound] = useState(false);

    const filterUser = useCallback(() => {
        let data = usersData.filter(item => {
            return item.uid === id
        })
        data = userWatchList.filter(item => parseInt(item.user_id) === id)
        if (data.length === 1) {
            setFound(true);
            return;
        } else {
            setFound(false);
            return;
        }
    }, [id, userWatchList, usersData]);

    const getUserWatchList = () => {
        axios.get('/affiliate/v1/doctor/watchlist', {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('authData')}`
            }
        })
            .then(res => {
                setUserWatchList(res.data.data);
            })
            .catch(error => {
                if (error.response.data.data.code === 403) {
                    sessionStorage.clear();
                }
            });
    }

    useEffect(() => {
        if (userWatchList) {
            filterUser();
        } else {
            setFound(false);
        }
    }, [filterUser, userWatchList])

    const setUserData = () => {
        let data = usersData.filter(item => {
            return item.uid === id
        })
        setUserIndData(data);
        if (userWatchList) {
            data = userWatchList.filter(item => parseInt(item.user_id) === id)
        } else {
            data = []
        }
    }

    const addUserToList = () => {
        axios.post(`/affiliate/v1/doctor/watchlist?uid=${id}`, {}, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('authData')}`
            }
        }).then(res => {
            getUserWatchList();
        }).catch(err => {
            Notifications('error', "Interval Server Error!")
        })
    }

    const removeUserToList = () => {
        axios.delete(`/affiliate/v1/doctor/watchlist?uid=${id}`, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('authData')}`
            }
        }).then(res => {
            getUserWatchList();
        }).catch(err => {
            Notifications('error', "Interval Server Error!")
        })
    }


    return (
        <>
            {isFound ?
                <button
                    onClick={() => {
                        setUserData();
                        removeUserToList();
                    }}
                    style={
                        {
                            background: '#D7575F',
                            color: '#FFFFFF',
                            borderColor: '#D7575F'
                        }
                    }>Remove from Watchlist</button>
                :
                <button
                    onClick={() => {
                        setUserData();
                        addUserToList();
                    }}
                    style={
                        {
                            color: '#D7575F',
                            borderColor: '#D7575F'
                        }
                    }>
                    <img
                        src={watchListIcon}
                        alt={'exportIcon'}
                    />Add to Watchlist
                </button>

            }
        </>
    )
}


export default IndividualUserPanel;