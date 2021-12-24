import React, { useState } from 'react'
import logo from '../assets/img/jubiwatch_logo2.png';
import lockIcon from '../assets/img/lockicon.png';
import passIcon1 from '../assets/img/passwordicon1.png';
import tickIcon from '../assets/img/tickicon.png';
import wrongIcon from '../assets/img/wrongicon.png';
import passIcon2 from '../assets/img/passwordicon2.png';

function IdPassword() {

    const [email, setEmail] = useState(null);
    const [verCode, setVerCode] = useState(null);
    const [/*showPass*/, setShowPass] = useState(false);
    const [showVerEmailBtn, setShowVerEmailBtn] = useState(true);
    const [emailMsg, setEmailMsg] = useState(false);
    const [showVerification, setshowVer] = useState(false);
    const [btnClr, setBtnClr] = useState('#C6C6C6');
    const [okBtnClr, setOkBtnClr] = useState('#C6C6C6');
    const [passVisi, setPassVisi] = useState(false);
    const [pass, setPass] = useState(null);
    const [cPass, setCPass] = useState(null);
    const [invalidVer, setInvalidVer] = useState(false);
    const [passReq, setPassReq] = useState(false);

    const passHandle = () => {
        setPassReq(true);
    }

    const emailHandle = (e) => {
        setEmail(e.target.value);
        if (email.includes('@') && email.includes('.co')) {
            setBtnClr('#3E6578');
        }
        else {
            setBtnClr('#C6C6C6');
        }
    }
    const sendVerificationHandle = () => {
        if (email.includes('@') && email.includes('.co')) {
            setshowVer(true);
            setBtnClr('#C6C6C6');
        }
        else {
            setshowVer(false);
            setOkBtnClr('#C6C6C6')
        }
    }

    const verCodeHandle = (e) => {
        setVerCode(e.target.value);
        setInvalidVer(false);
        if (verCode.length >= 4) {
            setOkBtnClr('#3E6578')
        } else {
            setOkBtnClr('#C6C6C6')
        }
    }

    const verOkHandle = () => {
        if (verCode === 12345) {
            setInvalidVer(false);
            setEmailMsg(true);
            setShowVerEmailBtn(false);
            setshowVer(false);
            setInvalidVer(false);
            setShowPass(true);
        } else {
            setInvalidVer(true);
            setEmailMsg(false);
        }
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
        }

    }
    return (
        <>
            <div className="signup" >
                <div className="signup_cont signup_cont2">
                    <div className="signin_logo_cont idPassLogo">
                        <img src={logo} alt="Jubiwatch_logo" />
                        <p>for Doctors</p>
                    </div>
                    <form onSubmit={submitSignForm}>
                        <div className='signin_fields_cont'>
                            <div className='forget_text forget_pass_create'>
                                <p>Edit ID and Password</p>
                            </div>
                            <div className='idPassCont'>
                                <label className='signup_label'>Email ID</label>
                                <div className='signin_fields'>
                                    <input
                                        type="email"
                                        value={'A.Brown@aahospital.com'}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className='idPassCont'>
                                <label className='signup_label'>New Email ID</label>
                                <div className='signin_fields'>
                                    <input
                                        type="email"
                                        value={email}
                                        placeholder='New Email ID'
                                        onChange={(e) => emailHandle(e)} />

                                    {emailMsg ? <p className='verified_Email'>Verified!</p> : null}
                                </div>
                                {showVerEmailBtn ? <button onClick={sendVerificationHandle}
                                    className=' sign_btn sign_btn_email' type='button'
                                    style={{ background: btnClr }}>Send Verification Code</button> : null}
                                {showVerification ?
                                    <div className='signup_ver_form'>
                                        <input
                                            className="verification_Field"
                                            type="password"
                                            placeholder='Email Verification Code'
                                            onChange={(e) => verCodeHandle(e)} />

                                        <button onClick={verOkHandle}
                                            type='button'
                                            style={{ background: okBtnClr }}
                                            className='signup_btn signup_btn3'>OK</button>
                                    </div> : null}
                                {invalidVer ? <p className='invalidVer'>Invalid verification code</p> : null}
                                {showVerification ? <p className='verMsg'>Didn’t get the code? <button type='button' onClick={sendVerificationHandle}>Send it again</button></p> : null}
                            </div>
                            <div className='idPassCont'>
                                <label className='signup_label'>Current Password</label>
                                <div className='signin_fields'>
                                    <input
                                        type="Password"
                                        placeholder='Current Password'
                                    />
                                </div>
                            </div>
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
                            </div>
                            <div className='signup_btn_cont'>
                                <button type='button' className='signup_btn signup_btn1'>Cancel</button>
                                <button type='submit' className='signup_btn signup_btn2' style={{ background: '#3E6578' }}>Save</button>
                            </div>
                        </div>
                    </form>
                    <div className="signup_logo_bottom">
                        <img src={logo} alt="Jubiwatch_logo" />
                    </div>
                </div>
            </div >

        </>
    )
}

export default IdPassword;
