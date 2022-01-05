import '../assets/css/header.css'
import React, { useState } from 'react'
import UserMenu from './usermenu';
import logo from '../assets/img/jubiwatch_logo.png';
import addIcon from '../assets/img/addicon2.png';
import ConnectUser from './connectuser';
import { useRecoilState, useRecoilValue } from 'recoil';
import { authData, connectUserShow, showHeaderProfile, userPicUpload } from '../data/atom';

function Header() {
    const [connectMenu, setCmenu] = useRecoilState(connectUserShow);
    const userAuthData = useRecoilValue(authData);
    const [showHeaderChild2, /*setShowHeaderChild2*/] = useRecoilState(showHeaderProfile);
    const [/*connectMenuClass*/, /*setCmenuClass*/] = useState("c_menu");
    const [ddMenu, setDDmenu] = useState(false);
    const [ddMenuClass, setDDmenuClass] = useState("dd_menu");
    const userPic = useRecoilValue(userPicUpload);
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
            <div className=" containerNav" style={{ paddingTop: showHeaderChild2.paddingTop }}>
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
                            {showHeaderChild2.showHProfile ?
                                <>
                                    <div className='nav_Child21'>
                                        <p>Dr. Kim’s podiatric clinic</p>
                                        <p>{userAuthData.email} / Title</p>
                                    </div>
                                    <div className='nav_Child22'>
                                        <img src={userPic.avatar} alt="something" onClick={ddMenuShow} />
                                    </div>
                                </> : null
                            }
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
