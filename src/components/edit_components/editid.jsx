import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userIDedit } from '../../data/atom';
import logo from '../../assets/img/jubiwatch_logo.png';
import passIcon1 from '../../assets/img/passwordicon1.png';
import passIcon2 from '../../assets/img/passwordicon2.png';
import { Notifications } from '../../helpers/notifications';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import ApiServices from '../../services/apiservices';

function EditId() {

    const [timerShow, setTimerShow] = useState(false);
    const [idAtom, setIDAtom] = useRecoilState(userIDedit);
    const [email, setEmail] = useState('');
    const [verCode, setVerCode] = useState('');
    const [showVerEmailBtn, setShowVerEmailBtn] = useState(true);
    const [showVerification, setshowVer] = useState(false);
    const [btnClr, setBtnClr] = useState('#C6C6C6');
    const [okBtnClr, setOkBtnClr] = useState('#C6C6C6');
    const [pass, setPass] = useState(null);
    const [invalidVer, setInvalidVer] = useState(false);
    const [passVisi, setPassVisi] = useState(false);
    const [isVerified, setVerified] = useState(false);

    const history = useHistory();
    const cancelButton = () => {
        history.push('/')
    }
    const pushForgetHandle = () => {
        history.push('/forget');
    }
    const emailHandle = (e) => {
        setEmail(e.target.value);
        if (email.includes('@')) {
            setBtnClr('#3E6578');
        } else {
            setBtnClr('#C6C6C6');
        }
    }

    const sendVerificationHandle = async () => {
        if (email.includes('@')) {
            const res = await ApiServices.postOTP(email);
            if (res.status === 202) {
                setTimerShow(false);
                setTimeout(() => {
                    setTimerShow(true)
                }, 200);
            }
            setshowVer(true);
            setBtnClr('#C6C6C6');
        } else {
            setshowVer(false);
            setOkBtnClr('#C6C6C6')
        }
    }
    const verOkHandle = async () => {
        const res = await ApiServices.postVerifyOTP({ email: email, code: verCode });
        if (res.status === 202) {
            setInvalidVer(false);
            setShowVerEmailBtn(false);
            setshowVer(false);
            setVerified(true);
        } else {
            setInvalidVer(true);
            setVerified(false);
        }
    }
    const verCodeHandle = (e) => {
        setVerCode(e.target.value);
        setInvalidVer(false);
        if (verCode.length >= 5) {
            setOkBtnClr('#3E6578')
        } else {
            setOkBtnClr('#C6C6C6')
        }
    }
    const showPassVisibility = () => {
        setPassVisi(!passVisi);
    }
    const showEmailContent = async () => {
        if (pass !== '') {
            let isPass = sessionStorage.getItem('unKnown').slice(9);
            if (isPass !== pass) {
                return Notifications('warning', 'Incorrect Current Password');
            }
            if (isPass === pass) {
                setIDAtom((obj) => ({ currentPass: false, editEmail: true, successEmail: false, }))
            }
        } else {
            Notifications('warning', 'Enter Current Password');
        }
    }
    const submitSignForm = async (e) => {
        e.preventDefault();
        if (isVerified) {
            const res = await ApiServices.updateDoctorProfile({ email: email });
            if (res.status === 200) {
                setIDAtom((obj) => ({ currentPass: false, editEmail: false, successEmail: true, }))
                sessionStorage.clear();
            }
        } else {
            Notifications('warning', "Please verify your New-Email")
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
                                        required
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
                                                value={email}
                                                placeholder='New Email ID'
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
                                                    required
                                                    placeholder='Email Verification Code'
                                                    onChange={(e) => verCodeHandle(e)}
                                                />
                                                {timerShow ? <p className='verification_time'>
                                                    <CountdownCircleTimer
                                                        style={{ justifyContent: 'center', display: 'flex' }}
                                                        size={15}
                                                        isPlaying
                                                        duration={900}
                                                        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                                                        colorsTime={[880, 675, 450, 225]}
                                                    >
                                                        {({ remainingTime }) => {
                                                            const minutes = Math.floor(remainingTime / 60)
                                                            const seconds = remainingTime % 60

                                                            return `${minutes}:${seconds}`
                                                        }}
                                                    </CountdownCircleTimer>
                                                </p> : null
                                                }

                                                <button onClick={verOkHandle}
                                                    type='button'
                                                    style={{ background: okBtnClr }}
                                                    className='signup_btn signup_btn3'>OK</button>
                                            </div> : null
                                        }
                                        {invalidVer ? <p className='invalidVer'>Invalid verification code</p> : null}
                                        {showVerification ? <p className='verMsg'>Didn???t get the code? <button type='button' onClick={sendVerificationHandle}>Send it again</button></p> : null
                                        }
                                    </div>
                                    : <>
                                        <div className='forget_emailShow_cont'>
                                            <p>{email}</p>
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
