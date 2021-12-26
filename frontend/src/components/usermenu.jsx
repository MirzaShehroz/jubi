import '../assets/css/usermenu.css';
import React from 'react';
import avatar from "../assets/img/signup_avatar.png";
import lockIcon from "../assets/img/lockicon2.png";
import signOutIcon from "../assets/img/signouticon.png";
import helpIcon from "../assets/img/helpicon.png";
import { useHistory, Link } from 'react-router-dom';

function UserMenu({ menu }) {
    const history = useHistory();
    const logoutHandle = () => {
        sessionStorage.clear();
        history.push('/');
    }
    return (
        <>
            <div className={menu}>
                <ul className="menu_List">
                    <li>
                        <div className='menu_div'>
                            <img src={avatar} alt="something3" />
                            <p id='userName_P'>User name</p>
                            <p>Dr.Kim’s podiatric clinic</p>
                            <p>Emailadress@AAclinic.com</p>
                            <Link to='edit-profile'><button>Edit Profile</button></Link>
                        </div>
                    </li>
                    <li id='li'><Link to='edit-id-password'><img src={lockIcon} alt="something12" /> Edit ID and Password</Link></li>
                    <li><img src={helpIcon} alt="something16" /> Help</li>
                    <li onClick={logoutHandle}><img src={signOutIcon} alt="something" /> Sign out</li>
                </ul>
            </div>
        </>
    )
}

export default UserMenu
