import '../assets/css/sidebar.css'
import React from 'react'
import chatIcon from '../assets/img/chaticon.png'
import notiIcon from '../assets/img/notiicon.png'
import hamburgerIcon from '../assets/img/hamburgericon.png'
import settingIcon from '../assets/img/settingicon.png'
import signOutIcon from '../assets/img/signouticon.png'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar_icon'>
                <ul>
                    <li><img src={chatIcon} alt="" /></li>
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
    )
}

export default Sidebar
