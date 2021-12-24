import '../assets/css/connectuser.css'
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import cancelIcon from '../assets/img/cancelicon.png';
import cancelIcon2 from '../assets/img/cancelicon2.png';
import avatar from '../assets/img/avatar2.png'
import { connectUserShow } from '../data/atom';

function ConnectUser({ show }) {
    const [csMenu, setCSmenu] = useState(false);
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
    },[show]);

    const csMenuShow = () => {
        setCSmenu(true);
        csMenu ? setCSmenuClass("cs_menu openCSMenu") : setCSmenuClass("cs_menu");
    }

    const showReconnectBtn = () => {
        setShowCnctBtn(false);
        setShowReCnctBtn(true);
        setShowTryBtn(false);
    }
    const showTryAgainBtn = () => {
        setShowCnctBtn(false);
        setShowReCnctBtn(false);
        setDisableText('35%');
        setShowTryBtn(true);
    }
    const showCSConnectMenu = () => {
        setCSmenu(false);
        !csMenu ? setCSmenuClass("cs_menu openCSMenu") : setCSmenuClass("cs_menu");
        setCsMenuAtom((obj) => ({
            ...obj,
            csMenu: true
        }))
    }
    const closeComp = () => {

        setCsMenuAtom((obj) => ({
            ...obj,
            connectMenu: false,
            connectClass: 'c_menu',
        }));

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
                            onChange={csMenuShow}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment>
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
                    <div className='csMenu_Child1'>
                        <div className='csMenu_Child11' >
                            <img src={avatar} alt="something21" style={{ opacity: disableText }} />
                            <p style={{ opacity: disableText }}>Jeremy Kim</p>
                            <p style={{ opacity: disableText }}>Male / 52 y.o. (02/19/1969)
                                Wt:85kg   Ht:185cm</p>
                        </div>
                        <div className='csMenu_Child12'>
                            <Input id="standard-adornment-weight"
                                placeholder='Code'
                                aria-describedby="standard-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }} />
                            {showReCnctBtn ? <p className='csMenu_time'>14:32</p> : showTryBtn ? <p className='csMenu_time'>14:32</p> : null}
                            {showCnctBtn ? <p> When you select ‘ Connect’,
                                4-digit input popup will display on the
                                patient’s Jubi watch app.
                            </p> : showReCnctBtn ? <p> To complete connection with the patient,
                                let the patient open Jubi watch app on their device and input these 4 digit code.</p> : showTryBtn ? <p>This code in not valid anymore.
                                    Click ‘Try again’ and get the new code
                                    to connect to the person above.</p> : null
                            }
                        </div>
                    </div>
                    <div className='csMenu_Child2'>
                        <div className='csMenu_Child21'>
                            {showCnctBtn ? <button onClick={showReconnectBtn}>Connect</button> : null}
                            {showReCnctBtn ? <button onClick={showTryAgainBtn}>Reconnect</button> : null}
                            {showTryBtn ? <button>Try again</button> : null}
                        </div>
                        <div className='csMenu_Child22'>
                            <button>Cancel</button>
                        </div>
                    </div>
                </div >
            }

            <div className={csMenuClass}>
                <div className='csMenuDiv' onClick={showCSConnectMenu}>
                    <div className='csMenuDiv1'>
                        <img src={avatar} alt="something" />
                    </div>
                    <div className='csMenuDiv2'>
                        <p>Jeremy Kim</p>
                        <p>adress@gamil.com</p>
                    </div>
                </div>
                <div className='csMenuDiv'>
                    <div className='csMenuDiv1'>
                        <img src={avatar} alt="something" />
                    </div>
                    <div className='csMenuDiv2'>
                        <p>Jeremy Kim</p>
                        <p>adress@gamil.com</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ConnectUser;
