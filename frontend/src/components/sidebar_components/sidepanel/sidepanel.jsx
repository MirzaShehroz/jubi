import './sidepanel.css'
import React, { useCallback, useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { sidePanelFunc, userChatRooms } from '../../../data/atom';
import icon from '../../../assets/img/stripicon.png'
import userPic from '../../../assets/img/user_pic.jpg'
import { dateTimeSlice1 } from '../../../helpers/datetimeslice';
import { sliceMessage } from '../../../helpers/slicemessage';

function SidePanel({ display }) {

    const usersRoom = useRecoilValue(userChatRooms);
    const [/*..*/, setSP] = useRecoilState(sidePanelFunc);
    const getRoomMessage = useCallback(() => {
        usersRoom.map(item => item.ChatMessages.map((item, i) => item))
    }, [usersRoom])
    useEffect(() => {
        getRoomMessage();
    }, [getRoomMessage])
    const data = [
        {
            id: 1,
            name: 'Jamie Cloud',
            time: '5:02 pm',
            message: 'Yes, please',
            image: userPic
        },
        {
            id: 2,
            name: 'Ann Brown',
            time: '4:23 pm',
            message: 'I’m so sorry for the rescheduling',
            image: userPic
        },
        {
            id: 3,
            name: 'Jeremy Kim',
            time: 'Aug 12',
            message: 'Could you let me know hat time is next blah blah...',
            image: userPic
        },
        {
            id: 4,
            name: 'Chrisrina Rodriguez',
            time: 'Aug 12',
            message: 'Yes, please',
            image: userPic
        }
    ]
    const showSidePanelHandle = () => {
        setSP((obj) => ({ showSP: 'none', }))
    }
    const showBadge = (item) => {
        return item.ChatMessages.slice(-1).map(i => i.from === item.Uid ? <Badge bg="danger">N</Badge> : '')
    }
    return (

        <div id='sidePanel' style={{ display: display }} >
            <div className='sidePanel_child1'></div>
            <div className='sidePanel_child2'>
                <img style={{ transform: "rotate(180deg)" }} src={icon} alt="something10" onClick={showSidePanelHandle} />
            </div>
            <div className='sidePanel_child3'>
                <div className='sidePanel_child31'>
                    <div className='sidePanel_child31_1'>
                        <h3>Messages</h3>
                    </div>
                    <div className='sidePanel_child31_2'>
                        {usersRoom.map((item) => (
                            <div key={item.Uid} className='sidePanel_child31_userChatDiv'>
                                <div className='sidePanel_child31_img'>
                                    <img src={userPic} alt="something" />
                                </div>
                                <div className='sidePanel_child31_chatDetail'>
                                    <div className='sidePanel_child31_chatDetail1'>
                                        <h5>{item.FistName} {item.LastName} {showBadge(item)}</h5>
                                        <p style={{ color: '#999999' }}>{dateTimeSlice1(item)}</p>
                                    </div>
                                    <p>{item.ChatMessages.slice(-1).map(i => sliceMessage(i.message))}</p>
                                </div>
                            </div>
                        )).slice(0, 4)}
                    </div>
                    <div className='sidePanel_child31_3'>
                        <Link to='/chat'>View all &nbsp; {'>'}</Link>
                    </div>
                </div>

                <div className='sidePanel_child31'>
                    <div className='sidePanel_child31_1'>
                        <h3>Notifications </h3>
                    </div>
                    <div className='sidePanel_child31_2'>
                        {data.map((item) => (
                            <div key={item.id} className='sidePanel_child31_userChatDiv'>
                                <div className='sidePanel_child31_chatDetail'>
                                    <div className='sidePanel_child31_chatDetail1'>
                                        <h5>{item.name}</h5>
                                        <p style={{ color: '#999999' }}>{item.time}</p>
                                    </div>
                                    <p>{item.message}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='sidePanel_child31_3'>
                        <button>View all &nbsp; {'>'} </button>
                    </div>
                </div>

                <div className='sidePanel_child31'>
                    <div className='sidePanel_child31_1'>
                        <h3>Recent Actions </h3>
                    </div>
                    <div className='sidePanel_child31_2'>
                        {data.map((item) => (
                            <div key={item.id} className='sidePanel_child31_userChatDiv'>
                                <div className='sidePanel_child31_chatDetail'>
                                    <div className='sidePanel_child31_chatDetail1'>
                                        <p>{item.message}</p>
                                        <p style={{ color: '#999999' }}>{item.time}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='sidePanel_child31_3'>
                        <button>View all &nbsp; {'>'} </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidePanel
