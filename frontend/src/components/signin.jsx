import '../assets/css/signin.css';
import React from 'react';
import logo from '../assets/img/jubiwatch_logo.png';
import { Link, useHistory } from 'react-router-dom';
import { connectUserShow, showHeaderProfile, sidePanelFunc } from '../data/atom';
import { useRecoilState } from 'recoil';

function SignIn() {

    const [csMenuAtom, setCsMenuAtom] = useRecoilState(connectUserShow);
    const [showHeader, setShowHeader] = useRecoilState(showHeaderProfile);
    const [showSidePanel, setSP] = useRecoilState(sidePanelFunc);
    const history = useHistory();

    const loginHandle = (e) => {
        e.preventDefault();

        setCsMenuAtom((obj) => ({
            connectMenu: false,
            csMenu: false,
            connectClass: 'c_menu'
        }));
        setShowHeader((obj) => ({
            showHProfile: true,
            paddingTop: "0.8%",
            showUserPanel: false,
            iconRotate: false,
        }));
        setSP((obj) => ({
            showSP: 'none',
        }));

        localStorage.setItem('sign-in', 'mockData');
        history.push('/');
    }

    return (
        <div className="signin">
            <div className="signin_cont">
                <div className="signin_logo_cont">
                    <img src={logo} alt="Jubiwatch_logo" />
                    <p>for Doctors</p>
                </div>
                <form onSubmit={loginHandle}>
                    <div className='signin_fields_cont'>
                        <div className='signin_fields'>
                            <input type="text" placeholder='Email ID' />
                        </div>
                        <div className='signin_fields'>
                            <input type="password" placeholder='Password' />
                        </div>
                        <div className='signin_fields_bottom'>
                            <div className='signin_checkout'>
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </div>
                            <Link to='/forget'>Forgot password?</Link>
                        </div>
                        <div className='sign_btn_cont'>
                            <button type='submit' className='sign_btn signbtn_clr'>Sign In</button>
                        </div>
                        <div className='signin_bottom_cont'>
                            <p>New to here? <Link to={'sign-up'}>Create account</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default SignIn
