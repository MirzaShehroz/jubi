import '../assets/css/sidebar.css'
import React from 'react'
import SidePanel from './sidepanel'
import chatIcon from '../assets/img/chaticon.png'
import notiIcon from '../assets/img/notiicon.png'
import hamburgerIcon from '../assets/img/hamburgericon.png'
import settingIcon from '../assets/img/settingicon.png'
import signOutIcon from '../assets/img/signouticon.png'
import { useRecoilState } from 'recoil'
import { sidePanelFunc } from '../data/atom'

function Sidebar() {
    const [showSidePanel, setSP] = useRecoilState(sidePanelFunc);
    
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
                        <li><img src={notiIcon} alt="" /></li>
                        <li><img src={hamburgerIcon} alt="" /></li>
                    </ul>
                </div>
                <div className='sidebar_icon'>
                    <ul>
                        <li><img src={settingIcon} alt="" /></li>
                        <li><img src={signOutIcon} alt="" /></li>
                    </ul>
                </div>
            </div>
            <SidePanel display={showSidePanel.showSP} />
        </>
    )
}

export default Sidebar
