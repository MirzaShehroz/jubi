import React, { useState } from 'react'
import SignUpAddress from './signupaddress';
import logo from '../../assets/img/jubiwatch_logo2.png';
import passIcon1 from '../../assets/img/passwordicon1.png';
import picUpload from '../../assets/img/pic_upload_icon.png';
import passIcon2 from '../../assets/img/passwordicon2.png';
import { useRecoilState } from 'recoil';
import { docSignUpData, signUpFormValid, userPicUpload } from '../../data/atom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Notifications } from '../../helpers/helpers';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function SignUp2() {

    const [signUpValid, setSignValid] = useRecoilState(signUpFormValid);
    const [timerShow, setTimerShow] = useState(false);
    const [verCode, setVerCode] = useState(null);
    const [showSign3, setShowSign3] = useState(false);
    const [emailMsg, setEmailMsg] = useState(false);
    const [btnClr, setBtnClr] = useState('#C6C6C6');
    const [okBtnClr, setOkBtnClr] = useState('#C6C6C6');
    const [passVisi, setPassVisi] = useState(false);
    const [avatarPreview, setAvatarPreview] = useRecoilState(userPicUpload);
    const [docSignUp, setDocSignUp] = useRecoilState(docSignUpData);
    const history = useHistory();

    const cancelButton = () => {
        history.push('/sign-in')
    }

    const submitSignForm = (e) => {
        e.preventDefault();
        if (docSignUp.password === docSignUp.cPassword) {
            setShowSign3(true);
        } else {
            Notifications('error', 'Password did not match');
        }
    }

    const emailHandle = (e) => {
        setDocSignUp((obj => ({
            ...obj,
            email: e.target.value
        })))

        if (docSignUp.email.includes('@')) {
            setBtnClr('#3E6578');
        }
        else {
            setBtnClr('#C6C6C6');
        }
    }

    const sendVerificationHandle = () => {
        if (docSignUp.email.includes('@')) {
            axios.post(`/affiliate/v1/otp?email=${docSignUp.email}`)
                .then(res => {
                    Notifications('success', `${res.data.data.message}`)
                }).catch(err => {
                    Notifications('error', `Internal Server Error`)
                });
            setTimerShow(false);
            setTimeout(() => {
                setTimerShow(true);
            }, 200);
            setSignValid(obj => ({
                ...obj,
                showVerification: true,
            }))
            setBtnClr('#C6C6C6');
        } else {
            setSignValid(obj => ({
                ...obj,
                showVerification: false,
            }))
            setOkBtnClr('#C6C6C6')
        }
    }

    const verCodeHandle = (e) => {
        setVerCode(e.target.value);
        setSignValid(obj => ({
            ...obj,
            invalidVer: false,
        }))
        if (verCode.length >= 5) {
            setOkBtnClr('#3E6578')
        } else {
            setOkBtnClr('#C6C6C6')
        }
    }

    const verOkHandle = () => {
        axios.post(`/affiliate/v1/verify`, {
            email: docSignUp.email,
            code: verCode
        }).then(res => {
            Notifications('success', `${res.data.data.message}`)
            setSignValid(obj => ({
                invalidVer: false,
                showVerEmailBtn: false,
                showVerification: false,
                showPass: true,
            }))
            setEmailMsg(true);
        }).catch(err => {
            Notifications('error', `${err.response.data.data.message}`)
            setSignValid(obj => ({
                ...obj,
                invalidVer: true,
            }))
            setEmailMsg(false);
        })
    }

    const showPassVisibility = () => {
        setPassVisi(!passVisi);
    }
    const updateProfileDataChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview((obj) => ({
                    avatar: reader.result
                }));
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    return (
        <>
            {!showSign3 ?
                <div className="signup" >
                    <div className="signup_cont signup_cont2">
                        <p className='signup_heading'>Sign up</p>
                        <form onSubmit={submitSignForm} encType="multipart/form-data">
                            <div className='signin_fields_cont'>
                                <div className='signup_avatar'>
                                    <div>
                                        <img src={avatarPreview.avatar} alt="avatar" />
                                        <div className="custom-file">
                                            <div>
                                                <input
                                                    type="file"
                                                    className="custom-file-input"
                                                    id="images"
                                                    accept="image/*"
                                                    onChange={updateProfileDataChange}
                                                />
                                                <label htmlFor="images" className="custom-file-label"> <img src={picUpload} alt="avatar" /></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <label className='signup_label'>Name <span>*</span></label>
                                <div className='signin_fields'>
                                    <input
                                        type="text"
                                        placeholder='First name'
                                        value={docSignUp.firstName}
                                        onChange={(e) => setDocSignUp((obj => ({
                                            ...obj,
                                            firstName: e.target.value
                                        })))}
                                        required />
                                </div>
                                <div className='signin_fields'>
                                    <input
                                        type="text"
                                        value={docSignUp.middleName}
                                        onChange={(e) => setDocSignUp((obj => ({
                                            ...obj,
                                            middleName: e.target.value
                                        })))}
                                        placeholder='Middle name (can be empty)' />
                                </div>
                                <div className='signin_fields'>
                                    <input
                                        type="text"
                                        placeholder='Last name'
                                        value={docSignUp.lastName}
                                        onChange={(e) => setDocSignUp((obj => ({
                                            ...obj,
                                            lastName: e.target.value
                                        })))}
                                        required />
                                </div>
                                <div className='signup_email'>
                                    <label className='signup_label'>Email <span>*</span></label>
                                    <div className='signin_fields'>
                                        <input
                                            type="email"
                                            placeholder='Email ID'
                                            value={docSignUp.email}
                                            required
                                            onChange={(e) => emailHandle(e)} />

                                        {emailMsg ? <p className='verified_Email'>Verified!</p> : null}
                                    </div>
                                    {signUpValid.showVerEmailBtn ?
                                        <button
                                            onClick={sendVerificationHandle}
                                            className=' sign_btn sign_btn_email'
                                            type='button'
                                            style={{ background: btnClr }}>Send Verification Code</button> : null
                                    }
                                    {signUpValid.showVerification ?
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
                                        </div> : null}
                                    {signUpValid.invalidVer ? <p className='invalidVer'>Invalid verification code</p> : null}
                                    {signUpValid.showVerification ? <p className='verMsg'>Didn’t get the code? <button type='button' onClick={sendVerificationHandle}>Send it again</button></p> : null}
                                </div>
                                {signUpValid.showPass ? <div className='signup_pass'>
                                    <label className='signup_label'>Password <span>*</span></label>
                                    <div className='signin_fields passIconSet'>
                                        <input
                                            type={passVisi ? 'text' : 'password'}
                                            placeholder='Password'
                                            required
                                            minLength={8}
                                            value={docSignUp.password}
                                            onChange={(e) => setDocSignUp((obj => ({
                                                ...obj,
                                                password: e.target.value
                                            })))}
                                        />
                                        <img src={passVisi ? passIcon2 : passIcon1} alt='' onClick={showPassVisibility} />
                                    </div>
                                    <div className='signin_fields passIconSet'>
                                        <input
                                            type={passVisi ? 'text' : 'password'}
                                            placeholder='Confirm Password'
                                            value={docSignUp.cPassword}
                                            required
                                            onChange={(e) => setDocSignUp((obj => ({
                                                ...obj,
                                                cPassword: e.target.value
                                            })))}
                                        />
                                        <img src={passVisi ? passIcon2 : passIcon1} alt='' onClick={showPassVisibility} />
                                    </div>
                                </div> : null}
                                <div className='signup_btn_cont'>
                                    <button onClick={cancelButton} type='button' className='signup_btn signup_btn1'>Cancel</button>
                                    <button type='submit' style={{ background: "#3E6578" }} className='signup_btn signup_btn2'>Next</button>
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
