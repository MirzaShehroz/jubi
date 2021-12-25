import '../assets/css/signin.css';
import React from 'react';
import logo from '../assets/img/jubiwatch_logo.png';
import { Link, useHistory } from 'react-router-dom';
import { connectUserShow, showHeaderProfile, sidePanelFunc } from '../data/atom';
import { useRecoilState } from 'recoil';
import axios from "axios";
import {useState} from 'react';
import {Notifications} from '../helpers/helpersfunctions';
import {authData} from '../data/atom';

function SignIn() {

    const [/*csMenuAtom*/, setCsMenuAtom] = useRecoilState(connectUserShow);
    const [/*showHeader*/, setShowHeader] = useRecoilState(showHeaderProfile);
    const [/*showSidePanel*/, setSP] = useRecoilState(sidePanelFunc);
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let [/*authData*/,setAuthData]=useRecoilState(authData);

    function resetFieldsData() {
        setUsername('');
        setPassword('');
    }


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

        // localStorage.setItem('sign-in', 'mockData');
        // history.push('/');

        const data={
            username: username,
            password: password
        }


        axios.post('http://ec2-13-125-149-247.ap-northeast-2.compute.amazonaws.com:9090/affiliate/v1/user/login',data)
            .then((response)=>{
                // console.log(response.data.success)
                setAuthData((obj)=>({
                    email: response.data.data.username,
                    token: response.data.data.token,
                }))
                sessionStorage.setItem('authData',response.data.data.username);
                resetFieldsData();
                Notifications('success','Login Successful')
                history.push('/');
            })
            .catch((err)=>{
                //console.log(err.response.data.success)
                resetFieldsData();
                Notifications('error','Invalid Credentals! Try Again')
            });
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
                            <input type="email" placeholder='Email ID' onChange={(e)=>setUsername(e.target.value)} required/>
                        </div>
                        <div className='signin_fields'>
                            <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} required/>
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
