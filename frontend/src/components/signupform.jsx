import React, { useState } from 'react'
import SignUpAddress from './signupaddress';
import logo from '../assets/img/jubiwatch_logo2.png';
import avatar from '../assets/img/signup_avatar.png';
import passIcon1 from '../assets/img/passwordicon1.png';
import passIcon2 from '../assets/img/passwordicon2.png';

function SignUp2() {

    const [email, setEmail] = useState(null);
    const [verCode, setVerCode] = useState(null);
    const [invalidVer, setInvalidVer] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [showSign3, setShowSign3] = useState(false);
    const [showVerEmailBtn, setShowVerEmailBtn] = useState(true);
    const [emailMsg, setEmailMsg] = useState(false);
    const [showVerification, setshowVer] = useState(false);
    const [btnClr, setBtnClr] = useState('#C6C6C6');
    const [okBtnClr, setOkBtnClr] = useState('#C6C6C6');
    const [passVisi, setPassVisi] = useState(false);

    const submitSignForm = (e) => {
        e.preventDefault();
        setShowSign3(true);
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
        if (verCode === '12345') {
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

    return (
        <>
            {!showSign3 ?
                <div className="signup" >
                    <div className="signup_cont signup_cont2">
                        <p className='signup_heading'>Sign up</p>
                        <form onSubmit={submitSignForm}>
                            <div className='signin_fields_cont'>
                                <div className='signup_avatar'>
                                    <img src={avatar} alt="avatar" />
                                </div>
                                <label className='signup_label'>Name <span>*</span></label>
                                <div className='signin_fields'>
                                    <input
                                        type="text"
                                        placeholder='First name' />
                                </div>
                                <div className='signin_fields'>
                                    <input
                                        type="text"
                                        placeholder='Middle name (can be empty)' />
                                </div>
                                <div className='signin_fields'>
                                    <input
                                        type="text"
                                        placeholder='Last name' />
                                </div>
                                <div className='signup_email'>
                                    <label className='signup_label'>Email <span>*</span></label>
                                    <div className='signin_fields'>
                                        <input
                                            type="email"
                                            value={email}
                                            placeholder='Email ID'
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
                                {showPass ? <div className='signup_pass'>
                                    <label className='signup_label'>Password <span>*</span></label>
                                    <div className='signin_fields passIconSet'>
                                        <input
                                            type={passVisi ? 'text' : 'password'}
                                            placeholder='Password'
                                        />
                                        <img src={passVisi ? passIcon2 : passIcon1} alt='' onClick={showPassVisibility} />
                                    </div>
                                    <div className='signin_fields passIconSet'>
                                        <input
                                            type={passVisi ? 'text' : 'password'}
                                            placeholder='Confirm Password'
                                        />
                                        <img src={passVisi ? passIcon2 : passIcon1} alt='' onClick={showPassVisibility} />
                                    </div>
                                </div> : null}
                                <div className='signup_btn_cont'>
                                    <button type='button' className='signup_btn signup_btn1'>Cancel</button>
                                    <button type='submit' className='signup_btn signup_btn2'>Next</button>
                                </div>
                            </div>
                        </form>
                        <div className="signup_logo_bottom">
                            <img src={logo} alt="Jubiwatch_logo" />
                        </div>
                    </div>
                </div >
                :
                <SignUpAddress />}
        </>
    )
}

export default SignUp2
