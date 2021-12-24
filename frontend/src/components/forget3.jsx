import '../assets/css/forget.css';
import React, { useState } from 'react';
import logo from '../assets/img/jubiwatch_logo.png';
import Forget4 from './forget4';


function Forget3() {
    const [btnClr, setBtnClr] = useState('#C6C6C6');
    const [emailVer, setEmailVer] = useState(null);
    const [showF4, setF4] = useState(false);
    const [invalidVer, setInvalidVer] = useState(false);


    const emailVerHandle = (e) => {
        setEmailVer(e.target.value);
        setInvalidVer(false);
        if (emailVer.length >= 4) {
            setBtnClr('#3E6578')
        } else {
            setBtnClr('#C6C6C6')
        }
    }

    const submitForget3Handle = (e) => {
        e.preventDefault();
        if (btnClr === "#3E6578") {
            if (emailVer === 12345) {
                setF4(true);
            } else {
                setInvalidVer(true);
            }
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
                                            <span> abc@emailadress.com</span></p>
                                    </div>

                                    <div className='signup_ver_form'>
                                        <input
                                            className="verification_Field forget_verification_Field"
                                            type="password"
                                            placeholder='Email Verification Code'
                                            onChange={(e) => emailVerHandle(e)} />
                                    </div>

                                    <div className='signin_fields_bottom forget_field_2'>
                                        <div className='forget_field_21 forget_ver21'>
                                            {invalidVer ? <p className='invalidVer'>Invalid verification code</p> : null}
                                            <p className='verMsg'>Didn’t get the code? <button type='button'>Send it again</button></p>
                                        </div>
                                    </div>
                                    <div className='signup_btn_cont'>
                                        <button type='button' className='signup_btn signup_btn1'>Cancel</button>
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
