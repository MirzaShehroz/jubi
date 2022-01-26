import '../../assets/css/forget.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Forget4 from './forget4';
import logo from '../../assets/img/jubiwatch_logo.png';
import { forgetPassDoc } from '../../data/atom';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { Notifications } from '../../helpers/helpers';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';


function Forget3() {
    const forgetDoc = useRecoilValue(forgetPassDoc);
    const [btnClr, setBtnClr] = useState('#C6C6C6');
    const [timerShow, setTimerShow] = useState(true);
    const [emailVer, setEmailVer] = useState(null);
    const [showF4, setF4] = useState(false);
    const [invalidVer, setInvalidVer] = useState(false);
    const history = useHistory();
    const cancelButton = () => {
        history.push('/sign-in')
    }

    const emailVerHandle = (e) => {
        setEmailVer(e.target.value);
        setInvalidVer(false);
        if (emailVer.length >= 5) {
            setBtnClr('#3E6578')
        } else {
            setBtnClr('#C6C6C6')
        }
    }
    const sendForgetOTP = () => {
        axios.post(`http://ec2-13-125-149-247.ap-northeast-2.compute.amazonaws.com:9090/affiliate/v1/otp?email=${forgetDoc.email}`)
            .then((res) => {
                Notifications('success', `${res.data.data.message}`);
                setTimerShow(false);
                setTimeout(() => {
                    setTimerShow(true)
                }, 200);
            }).catch((err) => { Notifications('error', `Internal Server Error`) })
    }
    const verifyForgetOTP = () => {
        axios.post(`http://ec2-13-125-149-247.ap-northeast-2.compute.amazonaws.com:9090/affiliate/v1/verify`, {
            email: forgetDoc.email,
            code: emailVer
        }).then((res) => {
            setF4(true);
        }).catch((err) => {
            setInvalidVer(true);
            setF4(false);
        })
    }

    const submitForget3Handle = (e) => {
        e.preventDefault();
        if (btnClr === "#3E6578") {
            verifyForgetOTP();
        } else {
            setF4(false);
        }
    }

    return (
        <>
            {
                !showF4 ?
                    <div className="signin">
                        <div className="signin_cont">
                            <div className="signin_logo_cont forget_logo">
                                <img src={logo} alt="Jubiwatch_logo" />
                                <p>for Doctors</p>
                            </div>
                            <form onSubmit={submitForget3Handle}>
                                <div className='signin_fields_cont'>
                                    <div className='forget_text'>
                                        <p>We sent you the code to your email
                                            <span> {forgetDoc.email}</span></p>
                                    </div>

                                    <div className='signup_ver_form'>
                                        <input
                                            className="verification_Field forget_verification_Field"
                                            type="password"
                                            required
                                            placeholder='Email Verification Code'
                                            onChange={(e) => emailVerHandle(e)}
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

                                    </div>

                                    <div className='signin_fields_bottom forget_field_2'>
                                        <div className='forget_field_21 forget_ver21'>
                                            {invalidVer ? <p className='invalidVer'>Invalid verification code</p> : null}
                                            <p className='verMsg'>Didn’t get the code? <button type='button' onClick={sendForgetOTP}>Send it again</button></p>
                                        </div>
                                    </div>
                                    <div className='signup_btn_cont'>
                                        <button onClick={cancelButton} type='button' className='signup_btn signup_btn1'>Cancel</button>
                                        <button type='submit' className='signup_btn signup_btn2' style={{ background: btnClr }}>Continue</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div > :
                    <Forget4 />
            }


        </>
    )
}

export default Forget3
