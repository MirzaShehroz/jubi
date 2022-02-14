import './sidebar.css'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useHistory } from 'react-router-dom';
import SidePanel from '../sidepanel/sidepanel'
import chatIcon from '../../../assets/img/chaticon.png'
import notiIcon from '../../../assets/img/notiicon.png'
import hamburgerIcon from '../../../assets/img/hamburgericon.png'
import settingIcon from '../../../assets/img/settingicon.png'
import signOutIcon from '../../../assets/img/signouticon.png'
import { showMessageNoti, sidePanelFunc } from '../../../data/atom'
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';

function Sidebar() {
    const showBadge = useRecoilValue(showMessageNoti);
    const [showSidePanel, setSP] = useRecoilState(sidePanelFunc);
    const history = useHistory();
    const showSidePanelHandle = () => {
        setSP((obj) => ({ ...obj, showSP: 'grid', }))
    }
    const logoutHandle = () => {
        sessionStorage.clear();
        history.push('/');
    }
    return (
        <>
            <div className='sidebar'>
                <div className='sidebar_icon'>
                    <ul>
                        <li>
                            <Box sx={{ color: 'action.active' }}>
                                <img onClick={showSidePanelHandle} src={chatIcon} alt="something" />
                                {showBadge ? <Badge color="error" variant="dot">
                                </Badge> : ''}
                            </Box>
                        </li>
                        <li><img onClick={showSidePanelHandle} src={notiIcon} alt="something" /></li>
                        <li><img onClick={showSidePanelHandle} src={hamburgerIcon} alt="something" /></li>
                    </ul>
                </div>
                <div className='sidebar_icon'>
                    <ul>
                        <li><img src={settingIcon} alt="something" /></li>
                        <li><img onClick={logoutHandle} src={signOutIcon} alt="something" /></li>
                    </ul>
                </div>
            </div>
            <SidePanel display={showSidePanel.showSP} />
        </>
    )
}

export default Sidebar
