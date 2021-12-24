import '../assets/css/forget.css';
import React, { useState } from 'react';
import logo from '../assets/img/jubiwatch_logo.png';
import lockIcon from '../assets/img/lockicon.png';
import tickIcon from '../assets/img/tickicon.png';
import wrongIcon from '../assets/img/wrongicon.png';
import passIcon1 from '../assets/img/passwordicon1.png';
import passIcon2 from '../assets/img/passwordicon2.png';
import Forget5 from './forget5';


function Forget4() {
    const [pass, setPass] = useState(null);
    const [cPass, setCPass] = useState(null);
    const [showF5, setF5] = useState(false);
    const [invalidVer, setInvalidVer] = useState(false);
    const [passVisi, setPassVisi] = useState(false);
    const [passReq, setPassReq] = useState(false);

    const passHandle = () => {
        setPassReq(true);
    }

    const submitPassForm = (e) => {
        e.preventDefault();
        if (pass !== cPass) {
            setInvalidVer(true);
        } else {
            setInvalidVer(false);
            setPassReq(false);
            setF5(true);
        }
    }

    const showPassVisibility = () => {
        setPassVisi(!passVisi);
    }

    return (
        <>
            {
                !showF5 ?
                    <div className="signin">
                        <div className="signin_cont">
                            <div className="signin_logo_cont forget_logo">
                                <img src={logo} alt="Jubiwatch_logo" />
                                <p>for Doctors</p>
                            </div>
                            <form onSubmit={submitPassForm}>
                                <div className='signin_fields_cont'>
                                    <div className='forget_text forget_pass_create'>
                                        <p>Create a new password</p>
                                    </div>

                                    <div className='forget_pass'>
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
                                                <img src={lockIcon} alt="something4" />
                                                <span>Requirements for a password</span>
                                            </div>
                                            <div className='forget_field_21 forget_showPassVal2'>
                                                <img src={tickIcon} alt="something6" />
                                                <span>At least 8 characters</span>
                                            </div>
                                            <div className='forget_field_21 forget_showPassVal2'>
                                                <img src={tickIcon} alt="something13" />
                                                <span>At least 1 uppercase character</span>
                                            </div>
                                            <div className='forget_field_21 forget_showPassVal2'>
                                                <img src={wrongIcon} alt="something14" />
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
                                        <button type='submit' className='signup_btn signup_btn2' style={{ background: '#3E6578' }}>Continue</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div > :
                    <Forget5 />
            }


        </>
    )
}

export default Forget4
