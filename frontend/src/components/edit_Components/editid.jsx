import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userIDedit} from '../../data/atom';
import logo from '../../assets/img/jubiwatch_logo.png';
import passIcon1 from '../../assets/img/passwordicon1.png';
import passIcon2 from '../../assets/img/passwordicon2.png';

function EditId() {

    const [idAtom, setIDAtom] = useRecoilState(userIDedit);
    const [email, setEmail] = useState(null);
    const [verCode, setVerCode] = useState(null);
    const [showVerEmailBtn, setShowVerEmailBtn] = useState(true);
    const [showVerification, setshowVer] = useState(false);
    const [btnClr, setBtnClr] = useState('#C6C6C6');
    const [okBtnClr, setOkBtnClr] = useState('#C6C6C6');
    const [/*pass*/, setPass] = useState(null);
    const [invalidVer, setInvalidVer] = useState(false);
    const [passVisi, setPassVisi] = useState(false);
    const history = useHistory();

    const cancelButton = () => {
        history.push('/')
    }

    const emailHandle = (e) => {
        setEmail(e.target.value);
        if (email.includes('@')) {
            setBtnClr('#3E6578');
        } else {
            setBtnClr('#C6C6C6');
        }
    }

    const sendVerificationHandle = () => {
        if (email.includes('@')) {
            setshowVer(true);
            setBtnClr('#C6C6C6');
        } else {
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
        if (parseInt(verCode) === 12345) {
            setInvalidVer(false);
            setShowVerEmailBtn(false);
            setshowVer(false);
            setInvalidVer(false);
        } else {
            setInvalidVer(true);
        }
    }

    const showPassVisibility = () => {
        setPassVisi(!passVisi);
    }
    const showEmailContent = () => {
        setIDAtom((obj) => ({
            currentPass: false,
            editEmail: true,
            successEmail: false,
        }))
    }

    const pushForgetHandle = () => {
        history.push('/forget');
    }

    const submitSignForm = (e) => {
        e.preventDefault();
        setIDAtom((obj) => ({
            currentPass: false,
            editEmail: false,
            successEmail: true,
        }))
        sessionStorage.clear();
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
                                {
                                    idAtom.currentPass ? <p>Input password to identify you </p> :
                                        idAtom.editEmail ? <p>Edit Email</p> : null
                                }
                            </div>

                            {!idAtom.successEmail ?
                                <div className='idPassCont'>
                                    <label className='signup_label'>Email ID</label>
                                    <div className='signin_fields'>
                                        <input
                                            type="email"
                                            value={sessionStorage.getItem('authEmail')}
                                            style={{ background: '#EEEEEE' }}
                                            disabled
                                        />

                                    </div>
                                </div> : null
                            }

                            {idAtom.currentPass ? <div className='idPassCont'>
                                <label className='signup_label'>Current Password</label>
                                <div className='signin_fields passIconSet'>
                                    <input
                                        type={passVisi ? 'text' : 'password'}
                                        placeholder='Current Password'
                                        onChange={(e) => setPass(e.target.value)}
                                    />
                                    <img src={passVisi ? passIcon2 : passIcon1} alt='' onClick={showPassVisibility} />
                                </div>
                                <p className='verMsg'>Forgot password? <button type='button' onClick={pushForgetHandle}>Send reset code</button></p>
                            </div> :
                                idAtom.editEmail ?
                                    <div className='idPassCont'>
                                        <label className='signup_label'>New Email ID</label>
                                        <div className='signin_fields'>
                                            <input
                                                type="email"
                                                required
                                                placeholder='New Email ID'
                                                // value={email}
                                                onChange={(e) => emailHandle(e)}
                                                />
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
                                            </div> : null
                                        }
                                        {invalidVer ? <p className='invalidVer'>Invalid verification code</p> : null}
                                        {showVerification ? <p className='verMsg'>Didn’t get the code? <button type='button' onClick={sendVerificationHandle}>Send it again</button></p> : null
                                        }
                                    </div>
                                    : <>
                                        <div className='forget_emailShow_cont'>
                                            <p>abc@emailadress.com</p>
                                        </div>
                                        <p id='successEmailMsg'>Email ID has been changed successfully.</p>
                                    </>
                            }

                            {!idAtom.successEmail ?
                                <div className='signup_btn_cont'>
                                    <button onClick={cancelButton} type='button' className='signup_btn signup_btn1'>Cancel</button>
                                    {
                                        idAtom.currentPass ?
                                            <button
                                                type='button'
                                                className='signup_btn signup_btn2'
                                                style={{ background: '#3E6578' }}
                                                onClick={showEmailContent}
                                            >Continue</button> :
                                            idAtom.editEmail ?
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
                                        onClick={() => setIDAtom((obj) => ({
                                            currentPass: true,
                                            editEmail: false,
                                            successEmail: false,
                                        }))}
                                    >Sign In Now</button></Link>
                            }
                        </div>
                    </form>
                </div>
            </div >

        </>
    )
}

export default EditId;
