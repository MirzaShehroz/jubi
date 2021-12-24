import '../assets/css/usermenu.css';
import React from 'react';
import avatar from "../assets/img/signup_avatar.png";
import lockIcon from "../assets/img/lockicon2.png";
import signOutIcon from "../assets/img/signouticon.png";
import helpIcon from "../assets/img/helpicon.png";
import { Link } from 'react-router-dom';

function UserMenu({ menu }) {
    return (
        <>
            <div className={menu}>
                <ul className="menu_List">
                    <li>
                        <div className='menu_div'>
                            <img src={avatar} alt="" />
                            <p id='userName_P'>User name</p>
                            <p>Dr.Kim’s podiatric clinic</p>
                            <p>Emailadress@AAclinic.com</p>
                            <Link to='edit-profile'><button>Edit Profile</button></Link>
                        </div>
                    </li>
                    <li id='li'><Link to='edit-id-password'><img src={lockIcon} alt="" /> Edit ID and Password</Link></li>
                    <li><img src={helpIcon} alt="" /> Help</li>
                    <li><Link to='/sign-in'><img src={signOutIcon} alt="" /> Sign out</Link></li>
                </ul>
            </div>
        </>
    )
}

export default UserMenu
