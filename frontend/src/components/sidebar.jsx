import '../assets/css/sidebar.css'
import React from 'react'
import SidePanel from './sidepanel'
import chatIcon from '../assets/img/chaticon.png'
import notiIcon from '../assets/img/notiicon.png'
import hamburgerIcon from '../assets/img/hamburgericon.png'
import settingIcon from '../assets/img/settingicon.png'
import signOutIcon from '../assets/img/signouticon.png'
import { useRecoilState } from 'recoil'
import { showHeaderProfile, sidePanelFunc } from '../data/atom'
import { Link } from 'react-router-dom';

function Sidebar() {
    const [showHeader, setShowHeader] = useRecoilState(showHeaderProfile);
    const [showSidePanel, setSP] = useRecoilState(sidePanelFunc);

    const showUPanelHandle = () => {
        setShowHeader((obj) => ({
            showHProfile: !showHeader.showHProfile,
            paddingTop: showHeader.showHProfile ? "1.1%" : "0.8%",
            showUserPanel: !showHeader.showUserPanel,
            iconRotate: !showHeader.iconRotate,
        }))
    }

    const showSidePanelHandle = () => {
        setSP((obj) => ({
            ...obj,
            showSP: 'grid',
        }))
    }

    return (
        <>
            <div className='sidebar'>
                <div className='sidebar_icon'>
                    <ul>
                        <li><img onClick={showSidePanelHandle} src={chatIcon} alt="" /></li>
                        <li><img onClick={showSidePanelHandle} src={notiIcon} alt="" /></li>
                        <li><img onClick={showSidePanelHandle} src={hamburgerIcon} alt="" /></li>
                    </ul>
                </div>
                <div className='sidebar_icon'>
                    <ul>
                        <li><img onClick={showUPanelHandle} src={settingIcon} alt="" /></li>
                        <li><Link to='/sign-in'><img src={signOutIcon} alt="" /></Link></li>
                    </ul>
                </div>
            </div>
            <SidePanel display={showSidePanel.showSP} />
        </>
    )
}

export default Sidebar
