import '../assets/css/chat.css';
import React, { useState } from 'react'
import user from '../assets/img/user.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Badge, Button } from "react-bootstrap";
import bookMarkIcon from '../assets/img/bookmark.png'
import chatUserPic from '../assets/img/user_pic.jpg'
import attachPic from '../assets/img/attach.png'
import sendPic from '../assets/img/send.png'
import { useHistory } from 'react-router-dom'
import closeIcon from '../assets/img/cancelicon2.png'
import IndividualUserPanel from './individualuserpanel';


function Chat() {

    const history = useHistory();
    const chatCrossHandle = () => {
        history.push('/');
    }

    let [child1_1, setChild1_1] = useState({
        width: '24%',
        display: 'none',
    });
    let [child1_2, setChild1_2] = useState(
        {
            width: '28%',
        });
    let [child1_3, setChild1_3] = useState({
        width: '68%'
    });


    function toogleViewProfile() {
        if (child1_1.display === 'none') {
            setChild1_1({
                width: '22%',
                display: 'block',
               
            });
            setChild1_2({ width: '23%', });
            setChild1_3({ width: '53%' });
        }
        else {
            setChild1_1({ width: '20%', display: 'none', });
            setChild1_2({ width: '28%', });
            setChild1_3({ width: '68%' });
        }
    }


    return (
        <div style={{ width: '100%', height: '100vh', overflow: 'auto', background: 'gray', margin: 'auto' }}>
            <p id={'closeButton'} onClick={chatCrossHandle}><img alt={'closeIcon'} src={closeIcon} /></p>
            <div style={{ margin: 'auto', width: '85%', height: '90%', background: 'white', borderRadius: '10px' }}>

                <div className={'chatParent1'}>
                    <div style={child1_1} className={'child1-1'}>
                        <div>
                            <IndividualUserPanel />
                        </div>
                    </div>
                    <div style={child1_2} className={'child1-2'}>
                        <div className={'userChatParent1'}>
                            <div style={{ margin: 'auto' }} className={'userChatChild1-1'}>
                                <p className={'text-center'} style={{ margin: 'auto' }}><img alt="chatUserPic1" id={'userChatImage'} src={chatUserPic} /></p>
                            </div>
                            <div className={'userChatChild1-2'}>
                                <h6 id={'chatUserName'}>User Name 1</h6>
                                <p id={'chatUserMsg'}>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className={'userChatChild1-3'}>
                                <p id={'chatUserDate'}>11:12,today</p>
                                <p id={'chatUserBadge'}><Badge bg="danger">1</Badge></p>
                            </div>
                        </div>
                        <hr />
                        <div className={'userChatParent1'}>
                            <div style={{ margin: 'auto' }} className={'userChatChild1-1'}>
                                <p className={'text-center'} style={{ margin: 'auto' }}><img alt="chatUserPic2" id={'userChatImage'} src={chatUserPic} /></p>
                            </div>
                            <div className={'userChatChild1-2'}>
                                <h6 id={'chatUserName'}>User Name 1</h6>
                                <p id={'chatUserMsg'}>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className={'userChatChild1-3'}>
                                <p id={'chatUserDate'}>11:12,today</p>
                                <p id={'chatUserBadge'}><Badge bg="danger">1</Badge></p>
                            </div>
                        </div>
                        <hr />
                        <div className={'userChatParent1'}>
                            <div style={{ margin: 'auto' }} className={'userChatChild1-1'}>
                                <p className={'text-center'} style={{ margin: 'auto' }}><img alt="chatUserPic3" id={'userChatImage'} src={chatUserPic} /></p>
                            </div>
                            <div className={'userChatChild1-2'}>
                                <h6 id={'chatUserName'}>User Name 1</h6>
                                <p id={'chatUserMsg'}>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className={'userChatChild1-3'}>
                                <p id={'chatUserDate'}>11:12,today</p>
                                <p id={'chatUserBadge'}><Badge bg="danger">1</Badge></p>
                            </div>
                        </div>
                        <hr />
                        <div className={'userChatParent1'}>
                            <div style={{ margin: 'auto' }} className={'userChatChild1-1'}>
                                <p className={'text-center'} style={{ margin: 'auto' }}><img alt="chatUserPic4" id={'userChatImage'} src={chatUserPic} /></p>
                            </div>
                            <div className={'userChatChild1-2'}>
                                <h6 id={'chatUserName'}>User Name 1</h6>
                                <p id={'chatUserMsg'}>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className={'userChatChild1-3'}>
                                <p id={'chatUserDate'}>11:12,today</p>
                                <p id={'chatUserBadge'}><Badge bg="danger">1</Badge></p>
                            </div>
                        </div>
                        <hr />
                        <div className={'userChatParent1'}>
                            <div style={{ margin: 'auto' }} className={'userChatChild1-1'}>
                                <p className={'text-center'} style={{ margin: 'auto' }}><img alt="chatUserPic5" id={'userChatImage'} src={chatUserPic} /></p>
                            </div>
                            <div className={'userChatChild1-2'}>
                                <h6 id={'chatUserName'}>User Name 1</h6>
                                <p id={'chatUserMsg'}>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className={'userChatChild1-3'}>
                                <p id={'chatUserDate'}>11:12,today</p>
                                <p id={'chatUserBadge'}><Badge bg="danger">1</Badge></p>
                            </div>
                        </div>
                        <hr />
                        <div className={'userChatParent1'}>
                            <div style={{ margin: 'auto' }} className={'userChatChild1-1'}>
                                <p className={'text-center'} style={{ margin: 'auto' }}><img alt="chatUserPic6" id={'userChatImage'} src={chatUserPic} /></p>
                            </div>
                            <div className={'userChatChild1-2'}>
                                <h6 id={'chatUserName'}>User Name 1</h6>
                                <p id={'chatUserMsg'}>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className={'userChatChild1-3'}>
                                <p id={'chatUserDate'}>11:12,today</p>
                                <p id={'chatUserBadge'}><Badge bg="danger">1</Badge></p>
                            </div>
                        </div>
                        <hr />
                        <div className={'userChatParent1'}>
                            <div style={{ margin: 'auto' }} className={'userChatChild1-1'}>
                                <p className={'text-center'} style={{ margin: 'auto' }}><img alt="chatUserPic7" id={'userChatImage'} src={chatUserPic} /></p>
                            </div>
                            <div className={'userChatChild1-2'}>
                                <h6 id={'chatUserName'}>User Name 1</h6>
                                <p id={'chatUserMsg'}>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className={'userChatChild1-3'}>
                                <p id={'chatUserDate'}>11:12,today</p>
                                <p id={'chatUserBadge'}><Badge bg="danger">1</Badge></p>
                            </div>
                        </div>
                        <hr />
                        <div className={'userChatParent1'}>
                            <div style={{ margin: 'auto' }} className={'userChatChild1-1'}>
                                <p className={'text-center'} style={{ margin: 'auto' }}><img alt="chatUserPic8" id={'userChatImage'} src={chatUserPic} /></p>
                            </div>
                            <div className={'userChatChild1-2'}>
                                <h6 id={'chatUserName'}>User Name 1</h6>
                                <p id={'chatUserMsg'}>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className={'userChatChild1-3'}>
                                <p id={'chatUserDate'}>11:12,today</p>
                                <p id={'chatUserBadge'}><Badge bg="danger">1</Badge></p>
                            </div>
                        </div>
                        <hr />
                        <div className={'userChatParent1'}>
                            <div style={{ margin: 'auto' }} className={'userChatChild1-1'}>
                                <p className={'text-center'} style={{ margin: 'auto' }}><img alt="chatUserPic9" id={'userChatImage'} src={chatUserPic} /></p>
                            </div>
                            <div className={'userChatChild1-2'}>
                                <h6 id={'chatUserName'}>User Name 1</h6>
                                <p id={'chatUserMsg'}>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className={'userChatChild1-3'}>
                                <p id={'chatUserDate'}>11:12,today</p>
                                <p id={'chatUserBadge'}><Badge bg="danger">1</Badge></p>
                            </div>
                        </div>
                        <hr />
                        <div className={'userChatParent1'}>
                            <div style={{ margin: 'auto' }} className={'userChatChild1-1'}>
                                <p className={'text-center'} style={{ margin: 'auto' }}><img alt="chatUserPic10" id={'userChatImage'} src={chatUserPic} /></p>
                            </div>
                            <div className={'userChatChild1-2'}>
                                <h6 id={'chatUserName'}>User Name 1</h6>
                                <p id={'chatUserMsg'}>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className={'userChatChild1-3'}>
                                <p id={'chatUserDate'}>11:12,today</p>
                                <p id={'chatUserBadge'}><Badge bg="danger">1</Badge></p>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div style={child1_3} className={'child1-3'}>
                        <div className={'msgParent1'}>
                            <div className={'msgChild1-1'}>
                                <div className={'masgParent2'}>
                                    <div className={'msgChild2-1'}>
                                        <p className={'text-center'} style={{ margin: 'auto' }}><img alt="chatUserPic11" id={'userMsgImage'} src={chatUserPic} /></p>
                                    </div>
                                    <div className={'msgChild2-2'} style={{ margin: 'auto' }}>
                                        <p id={'customBadge'} style={{ background: 'red', borderRadius: '100%', height: '10px', width: '10px' }}></p>
                                        <h4 id={'msgUserName'} onClick={toogleViewProfile}>User Name 1</h4>
                                    </div>
                                </div>
                            </div>
                            <div className={'msgChild1-2'}>
                                <div className={'send'}>
                                    <p className={'sendTime'}>11:15</p>
                                    <p style={{ background: '#E2EFF9' }} className={'sendMsg'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid autem ex exercitationem facere impedit iste reprehenderit? Ea enim esse facere harum nemo, non nulla officiis veritatis. Facere nisi, perferendis.</p>
                                </div>
                                <div className={'recieve'}>
                                    <p className={'recieveTime'}>11:15</p>
                                    <p style={{ background: '#EEEEEE' }} className={'recieveMsg'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid atque consequatur corporis deserunt dolorum enim eos error est et fugit ipsam maiores, minima pariatur quasi quod saepe sed soluta.</p>
                                </div>
                                <div className={'recieve'}>
                                    <p className={'recieveTime'}>11:15</p>
                                    <p style={{ background: '#EEEEEE' }} className={'recieveMsg'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid atque consequatur corporis deserunt dolorum enim eos error est et fugit ipsam maiores, minima pariatur quasi quod saepe sed soluta.</p>
                                </div>
                                <div className={'send'}>
                                    <p className={'sendTime'}>11:15</p>
                                    <p style={{ background: '#E2EFF9' }} className={'sendMsg'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid autem ex exercitationem facere impedit iste reprehenderit? Ea enim esse facere harum nemo, non nulla officiis veritatis. Facere nisi, perferendis.</p>
                                </div>
                                <div className={'recieve'}>
                                    <p className={'recieveTime'}>11:15</p>
                                    <p style={{ background: '#EEEEEE' }} className={'recieveMsg'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid atque consequatur corporis deserunt dolorum enim eos error est et fugit ipsam maiores, minima pariatur quasi quod saepe sed soluta.</p>
                                </div>
                                <div className={'send'}>
                                    <p className={'sendTime'}>11:15</p>
                                    <p style={{ background: '#E2EFF9' }} className={'sendMsg'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid autem ex exercitationem facere impedit iste reprehenderit? Ea enim esse facere harum nemo, non nulla officiis veritatis. Facere nisi, perferendis.</p>
                                </div>
                                <div className={'recieve'}>
                                    <p className={'recieveTime'}>11:15</p>
                                    <p style={{ background: '#EEEEEE' }} className={'recieveMsg'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid atque consequatur corporis deserunt dolorum enim eos error est et fugit ipsam maiores, minima pariatur quasi quod saepe sed soluta.</p>
                                </div>
                            </div>
                            <div className={'msgChild1-3'}>
                                <div className={'msgParent3'}>
                                    <div className={'msgChild3-1'}>
                                        <p className={'text-center'} style={{ margin: 'auto' }}><img alt="chatUserPic12" className={'msgAction'} src={attachPic} /></p>
                                    </div>
                                    <div className={'msgChild3-2'}>
                                        <input className={'form-control'} style={{ height: '100%' }} placeholder={'Type your mesage here...'} />
                                    </div>
                                    <div className={'msgChild3-3'}>
                                        <p className={'text-center'} style={{ margin: 'auto' }}><img alt="chatUserPic13" className={'msgAction'} src={sendPic} /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Chat;