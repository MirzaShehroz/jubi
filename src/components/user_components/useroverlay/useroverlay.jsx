import './useroverlay.css'
import React, { useCallback, useEffect, useState } from 'react';
import userPic from "../../../assets/img/user_pic.png";
import cancelIcon from "../../../assets/img/cancelicon.png";
import activeIcon1 from "../../../assets/img/activeicon1.png";
import activeIcon2 from "../../../assets/img/activeicon2.png";
import { showHeaderProfile, userDataIndividual } from '../../../data/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Link, useHistory } from 'react-router-dom';
import ApiServices from '../../../services/apiservices';

function UserOverlay({ display, animate }) {
    let date = new Date().getFullYear();
    const userIndData = useRecoilValue(userDataIndividual);
    const [showHeader, setShowHeader] = useRecoilState(showHeaderProfile);
    const [medicActiveList, setActiveMedicList] = useState([]);
    const [medicInactiveList, setInactiveMedicList] = useState([]);
    const history = useHistory();
    const showUPanelHandle = () => {
        setShowHeader((obj) => ({ showUserPanel: !showHeader.showUserPanel, }))
    }
    const getMedicList = useCallback(async () => {
        const res = await ApiServices.getMedicList(parseInt(sessionStorage.getItem('uid')),'active');
        if (res.status === 200) {
            res.data.list.map(item => {
                if (item.active === 'active') return setActiveMedicList(item.medicine_list)
                if (item.active === 'inactive') return setInactiveMedicList(item.medicine_list)
                if (item.active !== 'active' && item.active !== 'inactive') {
                    setActiveMedicList([]);
                    setInactiveMedicList([]);
                }
            })
        } else if (res.data.code === 401 || res.data.code === 403) {
            history.push('/sign-in');
        } else if (res.data.code === 404) {
            setActiveMedicList([]);
            setInactiveMedicList([]);
        }
    }, [history]);

    useEffect(() => {
        getMedicList();
    }, [getMedicList])
    return (
        <div id='overlay_user' className={animate} style={{ display: display }} >
            <div id='overlay_user_child'>
                {
                    userIndData.map(item => (
                        <div className='overlay_child1' key={item.uid}>
                            <div className='overlay_child11'>
                                <div className='overlay_child11_1'>
                                    <img src={userPic} alt="something18" />
                                </div>
                                <div className='overlay_child11_2'>
                                    <p>{item.first_name} {item.last_name}</p>
                                    <p>{date - parseInt(item.date_of_birth.slice(6))} y.o. ({item.date_of_birth})</p>
                                </div>
                            </div>
                            <img src={cancelIcon} alt="something19" onClick={showUPanelHandle} />
                        </div>
                    ))
                }
                <div className='overlay_child2'>
                    {medicActiveList.length > 0 ? <>
                        <div className='overlay_child21' >
                            <img src={activeIcon1} alt="something" />
                            <p>Active</p>
                        </div>
                        <div className='overlay_child22'>
                            {medicActiveList.map(item => (
                                <div key={item.mid} className='overlay_child22_1'>
                                    <div className='overlay_child22_1_img'>
                                        <img src={activeIcon1} alt="something" />
                                    </div>
                                    <div>
                                        <p>{item.name}</p>
                                        {item.frequency === 'as_needed' ? <p>As Needed</p> : <>
                                            <p>2 Times {item.frequency}{' '}
                                                8:00AM (2 pills) and 1:00PM (1 pill)</p>
                                            {/* <p className='overlay_child22_1_p'>Need to refill (3/10)</p> */}
                                        </>}

                                    </div>
                                </div>
                            ))}
                        </div>
                    </> : <div className='overlay_child21' >
                        <p>No Active Medicine</p>
                    </div>}
                </div>
                <div className='overlay_child2'>
                    {medicInactiveList.length > 0 ? <>
                        <div className='overlay_child21' >
                            <img src={activeIcon2} alt="something27" />
                            <p>Inactive</p>
                        </div>
                        <div className='overlay_child22'>
                            {medicInactiveList.map(item => (
                                <div key={item.mid} className='overlay_child22_1 overlay_child22_2'>
                                    <div className='overlay_child22_1_img'>
                                        <img src={activeIcon2} alt="something26" />
                                    </div>
                                    <div>
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </> : <div className='overlay_child21' >
                        <p>No Inactive Medicine</p>
                    </div>}
                </div>
                <div className='overlay_child3'>
                    <div className='overlay_child31'>
                        <Link to='/individual'>View detailed page</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserOverlay
