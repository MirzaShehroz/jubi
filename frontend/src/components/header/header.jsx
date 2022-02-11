import './header.css'
import React, { useState } from 'react'
import UserMenu from '../user_components/usermenu/usermenu';
import logo from '../../assets/img/jubiwatch_logo.png';
import addIcon from '../../assets/img/addicon2.png';
import ConnectUser from '../connectusers/connectuser';
import { useRecoilState, useRecoilValue } from 'recoil';
import {  connectUserShow, docData, userPicUpload } from '../../data/atom';

function Header() {
    const [connectMenu, setCmenu] = useRecoilState(connectUserShow);
    const [ddMenu, setDDmenu] = useState(false);
    const [ddMenuClass, setDDmenuClass] = useState("dd_menu");
    const userPic = useRecoilValue(userPicUpload);
    const docDataAtom = useRecoilValue(docData);

    const cMenuShow = () => {
        setCmenu((obj) => ({
            ...obj,
            connectMenu: true,
            connectClass: "c_menu openCMenu animate__animated animate__backInDown animate__faster",
        }));
    }
    const ddMenuShow = () => {
        setDDmenu(!ddMenu);
        !ddMenu ? setDDmenuClass("dd_menu openMenu animate__animated animate__backInDown animate__faster") : setDDmenuClass("dd_menu");
    }
    return (
        <header className="header">
            <div className=" containerNav" style={{ paddingTop: '0.8%' }}>
                <nav>
                    <div className='nav_parent1'>
                        <div className='nav_child1'>
                            <div className='nav_logo'>
                                <img src={logo} alt='' />
                            </div>
                            <div className='nav_connect_btn' onClick={cMenuShow}>
                                <img src={addIcon} alt="something15" />
                                <button >Connect  Users</button>
                            </div>
                        </div>
                        <div className='nav_child2'>
                                    <div className='nav_Child21'>
                                        <p>{docDataAtom.hospital}</p>
                                        <p>{docDataAtom.firstName} {docDataAtom.lastName} / {docDataAtom.title}</p>
                                    </div>
                                    <div className='nav_Child22'>
                                        <img src={userPic.avatar} alt="something" onClick={ddMenuShow} />
                                    </div>
                        </div>
                    </div>
                    <ConnectUser show={connectMenu.connectMenu} />
                    <UserMenu menu={ddMenuClass} />
                </nav>
            </div>
        </header>
    )
}

export default Header
