import './signin.css';
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connectUserShow, docSignUpData, showHeaderProfile, sidePanelFunc, signUpFormValid } from '../../data/atom';
import { useRecoilState } from 'recoil';
import axios from "axios";
import { useState } from 'react';
import logo from '../../assets/img/jubiwatch_logo.png';
import { Notifications } from '../../helpers/helpers';
import { authData } from '../../data/atom';

function SignIn() {

    const history = useHistory();
    const [/*csMenuAtom*/, setCsMenuAtom] = useRecoilState(connectUserShow);
    const [/*showHeader*/, setShowHeader] = useRecoilState(showHeaderProfile);
    const [/*showSidePanel*/, setSP] = useRecoilState(sidePanelFunc);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let [/*authData*/, setAuthData] = useRecoilState(authData);
    const [/*signUpValid*/, setSignValid] = useRecoilState(signUpFormValid);
    const [/*docSignUp*/, setDocSignUp] = useRecoilState(docSignUpData);

    useEffect(() => {
        setSignValid(obj => ({
            showVerEmailBtn: true,
            showVerification: false,
            invalidVer: false,
            showPass: false,
        }))
        setDocSignUp(obj => ({
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            password: "",
            cPassword: "",
            hospital: "",
            specialty: "",
            title: "",
            phone_number: ""
        }))
    }, [setDocSignUp, setSignValid])

    const loginHandle = async (e) => {
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

        const data = {
            username: username,
            password: password
        }

        axios.post(`/affiliate/v1/doctor/login`, data)
            .then((response) => {
                setAuthData((obj) => ({
                    email: response.data.data.username,
                    token: response.data.data.token.AccessToken,
                    UUID: response.data.data.token.AccessUuid,
                }))
                sessionStorage.setItem('authData', response.data.data.token.AccessToken);
                sessionStorage.setItem('unKnown', '$2a$10$J6' + password);
                sessionStorage.setItem('authEmail', response.data.data.username);
                Notifications('success', 'Login Successful')
                history.push('/');
            })
            .catch((err) => {
                Notifications('error', err.response.data.data.message);
            });

    }

    return (
        <div className="signin">
            <div className="signin_cont">
                <div className="signin_logo_cont">
                    <img src={logo} alt="Jubiwatch_logo" />
                    <p>for Doctors</p>
                </div>
                <form onSubmit={loginHandle} autoComplete="new-password">
                    <div className='signin_fields_cont'>
                        <div className='signin_fields'>
                            <input type="email" placeholder='Email ID' onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <div className='signin_fields'>
                            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
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
