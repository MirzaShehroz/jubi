import '../../assets/css/connectuser.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { connectUserShow, usersData_ } from '../../data/atom';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import cancelIcon from '../../assets/img/cancelicon.png';
import cancelIcon2 from '../../assets/img/cancelicon2.png';
import avatar from '../../assets/img/avatar2.png'
import { Notifications } from '../../helpers/helpers';

function ConnectUser({ show }) {
    let date = new Date().getFullYear();
    const usersData = useRecoilValue(usersData_);
    const [searchUser, setSearchUser] = useState([]);
    const [csMenu, setCSmenu] = useState(false);
    const [patientCode, setCode] = useState(null);
    const [csMenuAtom, setCsMenuAtom] = useRecoilState(connectUserShow);
    const [csMenuClass, setCSmenuClass] = useState("cs_menu");
    const [showCnctBtn, setShowCnctBtn] = useState(true);
    const [showReCnctBtn, setShowReCnctBtn] = useState(false);
    const [showTryBtn, setShowTryBtn] = useState(false);
    const [disableText, setDisableText] = useState('100%');

    useEffect(() => {
        if (show) {
            setCSmenu(true);
        } else {
            setCSmenu(false);
            setCSmenuClass("cs_menu")
        }
    }, [show]);



    const csMenuShow = (e) => {
        let data = usersData.filter(item => {
            if ((item.first_name.toLowerCase().includes(e.target.value.toLowerCase()) || item.email.toLowerCase().includes(e.target.value.toLowerCase())) && (e.target.value !== '')) {
                setCSmenu(true);
                csMenu ? setCSmenuClass("cs_menu openCSMenu") : setCSmenuClass("cs_menu");
                return item.first_name;
            }
        })
        setSearchUser(data);
    }

    const showReconnectBtn = () => {
        if (patientCode.length === 6) {
            setShowReCnctBtn(false);
            setTimeout(() => {
                setDisableText('100%')
                setShowCnctBtn(false);
                setShowReCnctBtn(true);
                setShowTryBtn(false);
            }, [1])
        }
    }

    const showTryAgainBtn = () => {
        setShowCnctBtn(false);
        setShowReCnctBtn(false);
        setDisableText('35%');
        setShowTryBtn(true);
    }

    const connectUserApi = (id, data) => {
        axios.post(`/affiliate/v1/chat/room?uid=${id}`, {}, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('authData')}`
            }
        })
            .then(res => {
                console.log(res.data.data);
                setSearchUser(data);
                setCSmenu(false);
                !csMenu ? setCSmenuClass("cs_menu openCSMenu") : setCSmenuClass("cs_menu");
                setCsMenuAtom((obj) => ({
                    ...obj,
                    csMenu: true
                }))
            })
            .catch(err => {
                if (err.response.data.data.code === 409) {
                    Notifications('error', 'User already connected')
                }
            });
    }

    const showCSConnectMenu = (id) => {
        const data = usersData.filter(item => {
            return item.uid === id
        });
        connectUserApi(id, data);
    }

    const closeComp = () => {
        setCsMenuAtom((obj) => ({
            csMenu: false,
            connectMenu: false,
            connectClass: 'c_menu',
        }));
        setShowCnctBtn(true);
        setShowReCnctBtn(false);
        setDisableText('100%');
        setShowTryBtn(false);
    }

    return (
        <>
            {!csMenuAtom.csMenu ?
                <div className={csMenuAtom.connectClass} style={{ background: "#efefef" }}>
                    <div className='cancelIcon_CMenu'>
                        <img src={cancelIcon} alt="something" onClick={closeComp} />
                    </div>
                    <div className='CMenu_search'>
                        <TextField
                            fullWidth
                            label=''
                            placeholder="Search username or Email"
                            id="fullWidth"
                            size="small"
                            onChange={(e) => { csMenuShow(e) }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </div>
                </div>
                :
                <div className={csMenuAtom.connectClass}>
                    <div className='cancelIcon_CMenu'>
                        <img src={cancelIcon2} alt="something20" onClick={closeComp} />
                    </div>
                    {searchUser.map(item => (
                        <div className='csMenu_Child1' key={item.uid}>
                            <div className='csMenu_Child11' >
                                <img src={avatar} alt="something21" style={{ opacity: disableText }} />
                                <p style={{ opacity: disableText }}>{item.first_name} {item.last_name}</p>
                                <p id='csPstyle' style={{
                                    opacity: disableText
                                }}>{item.gender} / {date - parseInt(item.date_of_birth.slice(6))} y.o. ({item.date_of_birth})</p>
                                <p style={{ opacity: disableText }}>Wt:{item.weight}   Ht:{item.height}</p>
                            </div>
                            <div className='csMenu_Child12'>
                                <Input
                                    id="standard-number"
                                    placeholder='Code'
                                    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                                    inputProps={{
                                        inputmode: 'numeric',
                                        pattern: '[0-9]*',
                                        maxLength: 6
                                    }}
                                    onChange={(e) => setCode(e.target.value)}
                                    variant="standard"
                                    required
                                />
                                {showReCnctBtn ? <p className='csMenu_time'>
                                    <CountdownCircleTimer
                                        style={{ justifyContent: 'center', display: 'flex' }}
                                        size={15}
                                        isPlaying
                                        duration={900}
                                        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                                        colorsTime={[880, 675, 450, 225]}
                                        onComplete={showTryAgainBtn}
                                    >
                                        {({ remainingTime }) => {
                                            const minutes = Math.floor(remainingTime / 60)
                                            const seconds = remainingTime % 60

                                            return `${minutes}:${seconds}`
                                        }}
                                    </CountdownCircleTimer></p> : null}
                                {showCnctBtn ? <p> When you select ‘ Connect’,
                                    6-digit input popup will display on the
                                    patient’s Jubi watch app.
                                </p> : showReCnctBtn ? <p> To complete connection with the patient,
                                    let the patient open Jubi watch app on their device and input these 6 digit code.</p> : showTryBtn ? <p>This code in not valid anymore.
                                        Click ‘Try again’ and get the new code
                                        to connect to the person above.</p> : null
                                }
                            </div>
                        </div>
                    ))}
                    <div className='csMenu_Child2'>
                        <div className='csMenu_Child21'>
                            {showCnctBtn ? <button onClick={showReconnectBtn}>Connect</button> : null}
                            {showReCnctBtn ? <button onClick={showReconnectBtn}>Reconnect</button> : null}
                            {showTryBtn ? <button onClick={showReconnectBtn}>Try again</button> : null}
                        </div>
                        <div className='csMenu_Child22'>
                            <button onClick={closeComp}>Cancel</button>
                        </div>
                    </div>
                </div >
            }

            <div id={'openCSmenu'} className={csMenuClass}>
                <div style={{ overflowY: 'auto', height: '100%' }}>
                    {
                        searchUser.map(item => (
                            <div className='csMenuDiv' onClick={() => {
                                showCSConnectMenu(item.uid);
                                sessionStorage.setItem('uid', item.uid);
                            }} key={item.uid}>
                                <div className='csMenuDiv1'>
                                    <img src={avatar} alt="something" />
                                </div>
                                <div className='csMenuDiv2'>
                                    <p>{item.first_name}</p>
                                    <p>{item.email}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>

    )
}

export default ConnectUser;
