import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { userPassEdit } from '../../data/atom';
import logo from '../../assets/img/jubiwatch_logo.png';
import lockIcon from '../../assets/img/lockicon.png';
import passIcon1 from '../../assets/img/passwordicon1.png';
import passIcon2 from '../../assets/img/passwordicon2.png';
import logo2 from '../../assets/img//passwordcomplete.png';
import PasswordValidation from '../password_Validation/passwordValidation';
import ConfirmPasswordValid from '../password_Validation/confirmPasswordValid';
import { Notifications } from '../../helpers/helpers';

function EditPassword() {

    const [passAtom, setPassAtom] = useRecoilState(userPassEdit);
    const [passVisi, setPassVisi] = useState(false);
    const [passReq, setPassReq] = useState(false);
    const [curPass, setCurPass] = useState(null);
    const [pass, setPass] = useState(null);
    const [cPass, setCPass] = useState(null);
    const [invalidVer, setInvalidVer] = useState(false);
    const history = useHistory();

    const cancelButton = () => {
        history.push('/')
    }

    const passHandle = () => {
        setPassReq(true);
    }
    const showPassVisibility = () => {
        setPassVisi(!passVisi);
    }

    const updatePassword = () => {
        axios.post(`http://ec2-13-125-149-247.ap-northeast-2.compute.amazonaws.com:9090/affiliate/v1/doctor/password/reset`, {
            username: sessionStorage.getItem('authEmail'),
            password: curPass,
            new_password: pass
        }).then((res) => {
            setInvalidVer(false);
            setPassReq(false);
            setPassAtom((obj) => ({
                currentPass: false,
                editPass: false,
                successPass: true,
            }));
            sessionStorage.clear();
        }).catch(err => {
            Notifications('error', err.response.data.data.message);
            setPassAtom((obj) => ({
                currentPass: true,
                editPass: false,
                successPass: false,
            }));
        })
    }
    const submitSignForm = (e) => {
        e.preventDefault();
        if (pass !== cPass) {
            setInvalidVer(true);
        } else {
            updatePassword();
        }

    }

    const showPassContent = () => {
        if (curPass !== null) {
            setPassAtom((obj) => ({
                currentPass: false,
                editPass: true,
                successPass: false,
            }))
        } else {
            Notifications('warning', 'Enter Current Password');
        }
    }

    return (
        <div>

            <div className="signup" >
                <div className="signup_cont signup_cont2">
                    <div className="signin_logo_cont idPassLogo">
                        <img src={logo} alt="Jubiwatch_logo" />
                        <p>for Doctors</p>
                    </div>
                    <form onSubmit={submitSignForm}>
                        <div className='signin_fields_cont'>
                            <div className='forget_text forget_pass_create'>
                                {
                                    passAtom.currentPass ? <p>Input password to identify you </p> :
                                        passAtom.editPass ? <p>Edit Password </p> : null
                                }
                            </div>
                            {
                                passAtom.currentPass ? <div className='idPassCont'>
                                    <label className='signup_label'>Current Password</label>
                                    <div className='signin_fields passIconSet'>
                                        <input
                                            placeholder='Current Password'
                                            required
                                            onChange={(e) => setCurPass(e.target.value)}
                                            type={passVisi ? 'text' : 'password'}
                                        />
                                        <img src={passVisi ? passIcon2 : passIcon1} alt='' onClick={showPassVisibility} />
                                    </div>
                                </div> :
                                    passAtom.editPass ?
                                        <div className='forget_pass'>
                                            <label className='signup_label'>New password</label>
                                            <div className='signin_fields passIconSet'>
                                                <input
                                                    type={passVisi ? 'text' : 'password'}
                                                    placeholder='Password'
                                                    required
                                                    onChange={(e) => {
                                                        passHandle();
                                                        setPass(e.target.value);
                                                    }}
                                                />
                                                <img src={passVisi ? passIcon2 : passIcon1} alt='' onClick={showPassVisibility} />
                                            </div>
                                            {passReq ? <div className='forget_showPassVal'>
                                                <div className='forget_field_21 forget_showPassVal1'>
                                                    <img src={lockIcon} alt="something" />
                                                    <span>Requirements for a password</span>
                                                </div>
                                                <PasswordValidation pass={pass} />
                                            </div> : null}
                                            <div className='signin_fields passIconSet'>
                                                <input
                                                    type={passVisi ? 'text' : 'password'}
                                                    placeholder='Confirm Password'
                                                    required
                                                    onChange={(e) => setCPass(e.target.value)}
                                                />
                                                <img src={passVisi ? passIcon2 : passIcon1} alt='' onClick={showPassVisibility} />
                                            </div>
                                            {invalidVer ? <div className='forget_showPassVal' style={{ margin: '0' }}>
                                                <ConfirmPasswordValid pass={pass} cPass={cPass} />
                                            </div> : null
                                            }
                                        </div> :
                                        <>
                                            <div className='passComp'>
                                                <img src={logo2} alt="logo2" />
                                                <p id='passCompMsg'>Complete!</p>
                                                <p style={{ marginBottom: '40px' }}>Your password has been changed successfully.</p>
                                            </div>
                                        </>
                            }

                            {!passAtom.successPass ?
                                <div className='signup_btn_cont'>
                                    <button onClick={cancelButton} type='button' className='signup_btn signup_btn1'>Cancel</button>
                                    {
                                        passAtom.currentPass ?
                                            <button
                                                type='button'
                                                className='signup_btn signup_btn2'
                                                style={{ background: '#3E6578' }}
                                                onClick={showPassContent}
                                            >Continue</button> :
                                            passAtom.editPass ?
                                                <button
                                                    type='submit'
                                                    className='signup_btn signup_btn2'
                                                    style={{ background: '#3E6578' }}>Save</button>
                                                : null
                                    }

                                </div> :
                                <Link to='sign-in'>
                                    <button
                                        className='sign_btn signbtn_clr'
                                        style={{ background: '#3E6578', width: '100%' }}
                                        type='button'
                                        onClick={() => setPassAtom((obj) => ({
                                            currentPass: true,
                                            editPass: false,
                                            successPass: false,
                                        }))}
                                    >Sign In Now</button></Link>
                            }
                        </div>
                    </form>
                </div>
            </div >
        </div>

    )
}

export default EditPassword
