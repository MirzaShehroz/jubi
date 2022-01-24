import '../../assets/css/chat.css';
import React, { useState } from 'react'
import { Badge } from "react-bootstrap";
import chatUserPic from '../../assets/img/user_pic.jpg'
import attachPic from '../../assets/img/attach.png'
import sendPic from '../../assets/img/send.png'
import { useHistory } from 'react-router-dom'
import closeIcon from '../../assets/img/cancelicon2.png'
import IndividualUserPanel from '../individual/individualPanel/individualuserpanel';


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
                width: '20%',
                display: 'block',

            });
            setChild1_2({ width: '24%', });
            setChild1_3({ width: '53%' });
        }
        else {
            setChild1_1({ width: '20%', display: 'none', });
            setChild1_2({ width: '28%', });
            setChild1_3({ width: '68%' });
        }
    }

    const data = [
        {
            id:1,
            username: 'User name 1'
        }, {
            id:2,
            username: 'User name 2'
        }, {
            id:3,
            username: 'User name 3'
        }, {
            id:4,
            username: 'User name 4'
        }, {
            id:5,
            username: 'User name 5'
        }, {
            id:6,
            username: 'User name 6'
        }, {
            id:7,
            username: 'User name 7'
        }, {
            id:8,
            username: 'User name 8'
        }, {
            id:9,
            username: 'User name 9'
        }, {
            id:10,
            username: 'User name 10'
        }, {
            id:11,
            username: 'User name 11'
        }, {
            id:12,
            username: 'User name 12'
        }, {
            id:13,
            username: 'User name 13'
        },
    ]

    return (
        <div style={{ height: '100vh', background: 'gray' }}>
            <p id={'closeButton'} onClick={chatCrossHandle}><img alt={'closeIcon'} src={closeIcon} /></p>
            <div style={{ margin: 'auto', width: '90%', height: '88.5%', borderRadius: '10px' }}>

                <div className={'chatParent1'}>
                    <div style={child1_1} className={'child1-1'}>
                        <div>
                            <IndividualUserPanel />
                        </div>
                    </div>
                    <div style={child1_2} className={'child1-2'}>
                        {data.map(item => (
                            <div key={item.id} className='userChatParent1'>
                                <div className='userChatChild11'>
                                    <img src={chatUserPic} alt="something" />
                                </div>
                                <div className='userChatChild12'>
                                    <div className='userChatChild12-1'>
                                        <h5>{item.username}</h5>
                                        <p style={{ fontSize: '10.5px' }}>10:10 today</p>
                                    </div>
                                    <div className='userChatChild12-2'>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                        <Badge bg="danger">1</Badge>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={child1_3} className={'child1-3'}>
                        <div className={'msgParent1'}>
                            <div className={'msgChild1-1'}>
                                <div className='msgChild1-1-img' onClick={toogleViewProfile}>
                                    <img src={chatUserPic} alt="" />
                                </div>
                                <div className='msgChild1-1-name'>
                                    <p></p>
                                    <h4 id={'msgUserName'} onClick={toogleViewProfile}>User Name 1</h4>
                                </div>
                            </div>
                            <div className={'msgChild1-2'}>
                                <div className={'send'}>
                                    <p className={'sendTime'}>11:15</p>
                                    <p className={'sendMsg'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid autem ex exercitationem facere impedit iste reprehenderit? Ea enim esse facere harum nemo, non nulla officiis veritatis. Facere nisi, perferendis.</p>
                                </div>
                                <div className={'recieve'}>
                                    <p className={'recieveTime'}>11:15</p>
                                    <p className={'recieveMsg'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid atque consequatur corporis deserunt dolorum enim eos error est et fugit ipsam maiores, minima pariatur quasi quod saepe sed soluta.</p>
                                </div>
                                <div className={'recieve'}>
                                    <p className={'recieveTime'}>11:15</p>
                                    <p className={'recieveMsg'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid atque consequatur corporis deserunt dolorum enim eos error est et fugit ipsam maiores, minima pariatur quasi quod saepe sed soluta.</p>
                                </div>
                                <div className={'send'}>
                                    <p className={'sendTime'}>11:15</p>
                                    <p className={'sendMsg'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid autem ex exercitationem facere impedit iste reprehenderit? Ea enim esse facere harum nemo, non nulla officiis veritatis. Facere nisi, perferendis.</p>
                                </div>
                                <div className={'recieve'}>
                                    <p className={'recieveTime'}>11:15</p>
                                    <p className={'recieveMsg'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid atque consequatur corporis deserunt dolorum enim eos error est et fugit ipsam maiores, minima pariatur quasi quod saepe sed soluta.</p>
                                </div>
                                <div className={'send'}>
                                    <p className={'sendTime'}>11:15</p>
                                    <p className={'sendMsg'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid autem ex exercitationem facere impedit iste reprehenderit? Ea enim esse facere harum nemo, non nulla officiis veritatis. Facere nisi, perferendis.</p>
                                </div>
                                <div className={'recieve'}>
                                    <p className={'recieveTime'}>11:15</p>
                                    <p className={'recieveMsg'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid atque consequatur corporis deserunt dolorum enim eos error est et fugit ipsam maiores, minima pariatur quasi quod saepe sed soluta.</p>
                                </div>
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
                                        placeholder={'Type your mesage here...'}
                                    />
                                </div>
                                <div className={'msgChild3-3'}>
                                    <img alt="chatUserPic13" src={sendPic} />
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