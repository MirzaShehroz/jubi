import '../assets/css/header.css'
import React, { useState } from 'react'
import UserMenu from './usermenu';
import logo from '../assets/img/jubiwatch_logo.png';
import addIcon from '../assets/img/addicon2.png';
import userPic from "../assets/img/user_pic.png";
import ConnectUser from './connectuser';
import { useRecoilState } from 'recoil';
import { connectUserShow } from '../data/atom';

function Header() {
    const [connectMenu, setCmenu] = useRecoilState(connectUserShow);
    const [connectMenuClass, setCmenuClass] = useState("c_menu");
    const [ddMenu, setDDmenu] = useState(false);
    const [ddMenuClass, setDDmenuClass] = useState("dd_menu");

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
            <div className=" containerNav">
                <nav>
                    <div className='nav_parent1'>
                        <div className='nav_child1'>
                            <div className='nav_logo'>
                                <img src={logo} alt='' />
                            </div>
                            <div className='nav_connect_btn' onClick={cMenuShow}>
                                <img src={addIcon} alt="" />
                                <button >Connect  Users</button>
                            </div>
                        </div>
                        <div className='nav_child2'>
                            <div className='nav_Child21'>
                                <p>Dr. Kim’s podiatric clinic</p>
                                <p>User name / Title</p>
                            </div>
                            <div className='nav_Child22'>
                                <img src={userPic} alt="" onClick={ddMenuShow} />
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
