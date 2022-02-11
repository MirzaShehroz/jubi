import './useroverlay.css'
import React from 'react';
import userPic from "../../../assets/img/user_pic.png";
import cancelIcon from "../../../assets/img/cancelicon.png";
import activeIcon1 from "../../../assets/img/activeicon1.png";
import activeIcon2 from "../../../assets/img/activeicon2.png";
import { showHeaderProfile, userDataIndividual } from '../../../data/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';

function UserOverlay({ display, animate }) {
    let date = new Date().getFullYear();
    const userIndData = useRecoilValue(userDataIndividual);
    const [showHeader, setShowHeader] = useRecoilState(showHeaderProfile);
    const showUPanelHandle = () => {
        setShowHeader((obj) => ({
            showUserPanel: !showHeader.showUserPanel,
        }))
    }
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
                    <div className='overlay_child21' >
                        <img src={activeIcon1} alt="something" />
                        <p>Active</p>
                    </div>
                    <div className='overlay_child22'>
                        <div className='overlay_child22_1'>
                            <div className='overlay_child22_1_img'>
                                <img src={activeIcon1} alt="something" />
                            </div>
                            <div>
                                <p>Estrogen</p>
                                <p>2 Times Everyday
                                    8:00AM (2 pills) and 1:00PM (1 pill)</p>
                                <p className='overlay_child22_1_p'>Need to refill (3/10)</p>
                            </div>
                        </div>
                        <div className='overlay_child22_1'>
                            <div className='overlay_child22_1_img'>
                                <img src={activeIcon1} alt="something" />
                            </div>
                            <div>
                                <p>Medicine Name1</p>
                                <p>Everyday weekday
                                    8:00AM (1 pill)</p>
                            </div>
                        </div>
                        <div className='overlay_child22_1'>
                            <div className='overlay_child22_1_img'>
                                <img src={activeIcon1} alt="something28" />
                            </div>
                            <div>
                                <p>Medicine Name2</p>
                                <p>As needed (1 pill)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='overlay_child2'>
                    <div className='overlay_child21' >
                        <img src={activeIcon2} alt="something27" />
                        <p>Inactive</p>
                    </div>
                    <div className='overlay_child22'>
                        <div className='overlay_child22_1 overlay_child22_2'>
                            <div className='overlay_child22_1_img'>
                                <img src={activeIcon2} alt="something26" />
                            </div>
                            <div>
                                <p>Medicine Name1</p>
                            </div>
                        </div>
                        <div className='overlay_child22_1 overlay_child22_2'>
                            <div className='overlay_child22_1_img'>
                                <img src={activeIcon2} alt="something25" />
                            </div>
                            <div>
                                <p>Medicine Name2</p>
                            </div>
                        </div>
                        <div className='overlay_child22_1 overlay_child22_2'>
                            <div className='overlay_child22_1_img'>
                                <img src={activeIcon2} alt="something24" />
                            </div>
                            <div>
                                <p>Medicine Name3</p>
                            </div>
                        </div>
                        <div className='overlay_child22_1 overlay_child22_2'>
                            <div className='overlay_child22_1_img'>
                                <img src={activeIcon2} alt="something23" />
                            </div>
                            <div>
                                <p>Medicine Name4</p>
                            </div>
                        </div>
                    </div>
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
