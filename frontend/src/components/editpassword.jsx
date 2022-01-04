import React, { useState } from 'react'
import logo from '../assets/img/jubiwatch_logo.png';
import lockIcon from '../assets/img/lockicon.png';
import passIcon1 from '../assets/img/passwordicon1.png';
import tickIcon from '../assets/img/tickicon.png';
import wrongIcon from '../assets/img/wrongicon.png';
import passIcon2 from '../assets/img/passwordicon2.png';
import { useHistory, Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import logo2 from '../assets/img//passwordcomplete.png';
import { userPassEdit } from '../data/atom';

function EditPassword() {

    const [passAtom, setPassAtom] = useRecoilState(userPassEdit);
    const [passVisi, setPassVisi] = useState(false);
    const [passReq, setPassReq] = useState(false);
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

    const submitSignForm = (e) => {
        e.preventDefault();
        if (pass !== cPass) {
            setInvalidVer(true);
        } else {
            setInvalidVer(false);
            setPassReq(false);
            setPassAtom((obj) => ({
                currentPass: false,
                editPass: false,
                successPass: true,
            }))
        }
        
    }

    const showPassContent = () => {
        setPassAtom((obj) => ({
            currentPass: false,
            editPass: true,
            successPass: false,
        }))
        sessionStorage.clear();
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
                                                <div className='forget_field_21 forget_showPassVal2'>
                                                    <img src={tickIcon} alt="something" />
                                                    <span>At least 8 characters</span>
                                                </div>
                                                <div className='forget_field_21 forget_showPassVal2'>
                                                    <img src={tickIcon} alt="something" />
                                                    <span>At least 1 uppercase character</span>
                                                </div>
                                                <div className='forget_field_21 forget_showPassVal2'>
                                                    <img src={wrongIcon} alt="something" />
                                                    <span>At least 1 number of symbol</span>
                                                </div>
                                            </div> : null}
                                            <div className='signin_fields passIconSet'>
                                                <input
                                                    type={passVisi ? 'text' : 'password'}
                                                    placeholder='Confirm Password'
                                                    onChange={(e) => setCPass(e.target.value)}
                                                />
                                                <img src={passVisi ? passIcon2 : passIcon1} alt='' onClick={showPassVisibility} />
                                            </div>
                                            {invalidVer ? <p className='passErr'>Passwords do not match</p> : null}
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