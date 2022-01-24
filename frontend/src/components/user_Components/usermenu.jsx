import '../../assets/css/usermenu.css';
import React from 'react';
import emailIcon from "../../assets/img/email_icon.png";
import lockIcon from "../../assets/img/lockicon2.png";
import signOutIcon from "../../assets/img/signouticon.png";
import helpIcon from "../../assets/img/helpicon.png";
import { useHistory, Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authData, docData, userPicUpload } from './../../data/atom';

function UserMenu({ menu }) {
    const avatar = useRecoilValue(userPicUpload);
    const userAuthData=useRecoilValue(authData);
    const docDataAtom = useRecoilValue(docData);

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
                            <div>
                                <img style={{margin:'0'}} src={avatar.avatar} alt="something3" />
                            </div>
                            <p id='userName_P'>{docDataAtom.firstName} {docDataAtom.lastName}</p>
                            <p>{docDataAtom.hospital}</p>
                            <p>Email: {userAuthData.email}</p>
                            <Link to='edit-profile'><button>Edit Profile</button></Link>
                        </div>
                    </li>
                    <li id='li'><Link to='edit-id'><img src={emailIcon} alt="something12" /> Edit ID</Link></li>
                    <li id='li'><Link to='edit-password'><img src={lockIcon} alt="something12" /> Edit Password</Link></li>
                    <li><img src={helpIcon} alt="something16" /> Help</li>
                    <li onClick={logoutHandle}><img src={signOutIcon} alt="something" /> Sign out</li>
                </ul>
            </div>
        </>
    )
}

export default UserMenu
