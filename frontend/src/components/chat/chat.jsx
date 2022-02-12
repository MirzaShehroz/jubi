import './chat.css';
import React, { useCallback, useEffect, useState } from 'react'
import { Badge } from "react-bootstrap";
import chatUserPic from '../../assets/img/user_pic.jpg'
import attachPic from '../../assets/img/attach.png'
import sendPic from '../../assets/img/send.png'
import { useHistory } from 'react-router-dom'
import closeIcon from '../../assets/img/cancelicon2.png'
import IndividualUserPanel from '../individual/individual_panel/individualuserpanel';
import { docData, userChatRooms } from '../../data/atom';
import { useRecoilState } from 'recoil';
import _ from 'underscore';
import ApiServices from '../../services/apiservices';
import { dateTimeSlice1, dateTimeSlice2 } from '../../helpers/datetimeslice';
import { sliceMessage } from '../../helpers/slicemessage';

function Chat() {
    const [usersRoom, setUserRooms] = useRecoilState(userChatRooms);
    const [doctor, setDocData] = useRecoilState(docData);
    const [userChat, setUserChat] = useState([]);
    const [isShow, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const history = useHistory();

    const chatCrossHandle = () => history.push('/')
    let [child1_1, setChild1_1] = useState({ width: '24%', display: 'none', });
    let [child1_2, setChild1_2] = useState({ width: '28%' });
    let [child1_3, setChild1_3] = useState({ width: '68%' });

    const getChatRooms = useCallback(async () => {
        const res = await ApiServices.getDoctorChatRooms();
        if (res.status === 200) {
            if (res.data.data) return setUserRooms(_.sortBy(res.data.data, 'Rid'))
        } else if (res.data.code === 403) {
            history.push('/sign-in');
        }
    }, [setUserRooms, history])
    const getUserChat = async () => {
        const res = await ApiServices.getSingleUserChat();
        if (res.status === 200) {
            setChatMessages(res.data.data);
        } else if (res.data.code === 403) {
            history.push('/sign-in');
        }
    }
    const docProfile = useCallback(async () => {
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
    }, [setDocData, history]);
    const sendMessage = async () => {
        let uid = parseInt(sessionStorage.getItem('uid'));
        let rid = parseInt(sessionStorage.getItem('%83r%5i$#d%'));
        if (message.length > 0) {
            const data = {
                rid: rid, from: doctor.dId, to: uid, message: message.trim()
            }
            const res = await ApiServices.postUserMessages(data);
            if (res.status === 200) {
                getUserChat();
                setMessage('');
                getChatRooms();
                filterChatRoom();
            } else if (res.data.code === 403) {
                history.push('/sign-in');
                setMessage('');
            }
        }
    }

    const filterChatRoom = () => {
        let data = usersRoom.filter(item => item.Uid === parseInt(sessionStorage.getItem('uid')))
        setUserChat(data);
    }
    useEffect(() => {
        getChatRooms();
    }, [getChatRooms])
    useEffect(() => {
        docProfile();
    }, [docProfile])

    function toogleViewProfile() {
        if (child1_1.display === 'none' && !isShow) {
            setChild1_1({ width: '20%', display: 'block', });
            setShow(true);
            setChild1_2({ width: '24%', });
            setChild1_3({ width: '53%' });
        }
        else {
            setShow(false)
            setChild1_1({ width: '20%', display: 'none', });
            setChild1_2({ width: '28%', });
            setChild1_3({ width: '68%' });
        }
    }
    function showPanel() {
        setShow(false)
        setChild1_1({ width: '20%', display: 'none', });
        setChild1_2({ width: '28%', });
        setChild1_3({ width: '68%' });
    }
    const chatHandle = (item) => {
        setChatMessages([]);
        sessionStorage.setItem('uid', item.Uid)
        showPanel();
        sessionStorage.setItem('%83r%5i$#d%', item.Rid)
        filterChatRoom();
        getUserChat();
    }
    const showBadge = (item) => {
        const badge = item.ChatMessages.slice(-1).map(i => i.from === item.Uid ? <Badge bg="danger">1</Badge> : '');
        return badge;
    }

    return (
        <div style={{ height: '100vh', background: 'gray' }}>
            <p id={'closeButton'} onClick={chatCrossHandle}><img alt={'closeIcon'} src={closeIcon} /></p>
            <div style={{ margin: 'auto', width: '90%', height: '88.5%', borderRadius: '10px' }}>

                <div className={'chatParent1'}>
                    <div style={child1_1} className={'child1-1'}>
                        <div>
                            {isShow ? <IndividualUserPanel /> : <div></div>}
                        </div>
                    </div>
                    <div style={child1_2} className={'child1-2'}>
                        {usersRoom.map(item => (
                            <div key={item.Uid}
                                onClick={() => chatHandle(item)}
                                className='userChatParent1'>
                                <div className='userChatChild11'>
                                    <img src={chatUserPic} alt="something" />
                                </div>
                                <div className='userChatChild12'>
                                    <div className='userChatChild12-1'>
                                        <h5>{item.FistName} {item.LastName}</h5>
                                        <p style={{ fontSize: '10.5px' }}>{dateTimeSlice1(item)}</p>
                                    </div>
                                    <div className='userChatChild12-2'>
                                        <p>{item.ChatMessages.slice(-1).map(i => sliceMessage(i.message))}</p>
                                        {showBadge(item)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={child1_3} className={'child1-3'}>
                        <div className={'msgParent1'}>
                            {userChat.length < 1 ? <div></div> :
                                userChat.map(item => (<>
                                    <div key={item.Uid} className={'msgChild1-1'}>
                                        <div className='msgChild1-1-img' onClick={toogleViewProfile}>
                                            <img src={chatUserPic} alt="" />
                                        </div>
                                        <div className='msgChild1-1-name'>
                                            <p></p>
                                            <h4 id={'msgUserName'} onClick={toogleViewProfile}>{item.FistName} {item.LastName}</h4>
                                        </div>
                                    </div>
                                    <div className={'msgChild1-2'}>
                                        {chatMessages.map(item1 => (
                                            <div key={item.mid}
                                                className={item1.to === parseInt(sessionStorage.getItem('uid')) ? 'send' : item1.from === parseInt(sessionStorage.getItem('uid')) ? 'recieve' : ''}>
                                                <p className={item1.to === parseInt(sessionStorage.getItem('uid')) ? 'sendTime' : item1.from === parseInt(sessionStorage.getItem('uid')) ? 'recieveTime' : ''}>
                                                    {dateTimeSlice2(item1.created_at)}
                                                </p>
                                                <p className={
                                                    item1.to === parseInt(sessionStorage.getItem('uid')) ? 'sendMsg' :
                                                        item1.from === parseInt(sessionStorage.getItem('uid')) ? 'recieveMsg' :
                                                            ''}>
                                                    {item1.message}
                                                </p>
                                            </div>
                                        )
                                        )}
                                    </div>
                                    <div className={'msgChild1-3'}>
                                        <div className='msgChild3-1'>
                                            <div className="custom-file1">
                                                <div>
                                                    <input
                                                        type="file"
                                                        className="custom-file1-input"
                                                        id="files"
                                                    />
                                                    <label htmlFor="files" className="custom-file1-label"> <img src={attachPic} alt="avatar" /></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={'msgChild3-2'}>
                                            <input
                                                className={'form-control'}
                                                placeholder={'Type your message here...'}
                                                value={message}
                                                required
                                                onChange={(e) => setMessage(e.target.value)}
                                            />
                                        </div>
                                        <div className={'msgChild3-3'}>
                                            <img alt="chatUserPic13" onClick={sendMessage} src={sendPic} />
                                        </div>
                                    </div>
                                </>))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;